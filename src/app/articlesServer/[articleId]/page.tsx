// server side rendering file. Read params and search params and based on lang and articleId show different content. use type script for types.
import { Metadata } from "next";
import { notFound } from "next/navigation"; // to handle 404

type ArticleParams = {
    articleId: string;
};
type ArticleSearchParams = {
    lang?: "en" | "fr";
};


const articles = {
    "breaking-news-1": {
        title: {
            en: "Breaking News 1 in English",
            fr: "Dernières Nouvelles 1 en Français"
        },
        content: {
            en: "This is the content of Breaking News 1 in English.",
            fr: "Ceci est le contenu des Dernières Nouvelles 1 en Français."
        }
    },
    "breaking-news-2": {
        title: {
            en: "Breaking News 2 in English",
            fr: "Dernières Nouvelles 2 en Français"
        },
        content: {
            en: "This is the content of Breaking News 2 in English.",
            fr: "Ceci est le contenu des Dernières Nouvelles 2 en Français."
        }
    }
};

export async function generateMetadata({ params, searchParams }: { params: Promise<ArticleParams>; searchParams: Promise<ArticleSearchParams>; }): Promise<Metadata> {
    const article = articles[(await params).articleId as keyof typeof articles];
    const lang = (await searchParams).lang ?? "en";
    if (!article) {
        return {
            title: "Article Not Found"
        };
    }
    return {
        title: article.title[lang as keyof typeof article.title]
    };
}

export default async function ArticlePage({ params, searchParams }: { params: Promise<ArticleParams>; searchParams: Promise<ArticleSearchParams>; }) {
    const article = articles[(await params).articleId as keyof typeof articles];
    const lang = (await searchParams).lang ?? "en";
    if (!article) {
        notFound(); // this will render the 404 page
    }
    return (
        <div>
            <h1>server article</h1>
            <h1>{article.title[lang as keyof typeof article.title]}</h1>
            <p>{article.content[lang as keyof typeof article.content]}</p>
        </div>
    );
}
