"use client"

//Read params and serachparams and based on lanf and articleId show different content. use type script for types.
import { useSearchParams, useParams } from "next/navigation";
import React from "react";
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

type ArticleParams = {
    articleId: string;
};

type ArticleSearchParams = {
    lang?: "en" | "fr";
};

const ArticlePage = () => {
    const params = useParams<ArticleParams>();
    const searchParams = useSearchParams();

    const articleId = params.articleId;
    const lang = (searchParams.get("lang") as ArticleSearchParams["lang"]) ?? "en";

    const article = articles[articleId as keyof typeof articles];

    if (!article) {
        return <div>Article not found.</div>;
    }

    return (
        <div>
            <h1>{article.title[lang as keyof typeof article.title]}</h1>
            <p>{article.content[lang as keyof typeof article.content]}</p>
        </div>
    );
};
export default ArticlePage;