import { Metadata } from "next";
import Count from "components/Count";

export const metadata: Metadata = {
    title: { absolute: 'Server counter Page' }, // Absolute title for this specific page
    description: 'This is a simple counter page'
};

export default function Counter() {
    return (<Count/>);
}