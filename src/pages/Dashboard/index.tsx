import React, {useEffect, useState} from "react";
import {SnippetAPI} from "../../api/snippet";

import {Container} from "./styles";
import TextInput from "../../components/TextInput";
import Snippet from "../../components/Snippet";

import SnippetProps from "../../components/Snippet/props";
import Navbar from "../../components/Navbar";
import SpaceSeparator from "../../components/SpaceSeparator";

import "./styles.css";

const Dashboard = () => {
    const [snippets, setSnippets] = useState<[] | SnippetProps[]>([]);
    const [currentSnippets, setCurrentSnippets] = useState<[] | SnippetProps[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        (async () => {
            if (currentSnippets.length === 0) {
                const data = await SnippetAPI.getAllSnippets()
                setSnippets(data.data);
                setCurrentSnippets(data.data);
            } else if (searchQuery === "") {
                setSnippets(currentSnippets);
            } else {
                const search = searchQuery.toLowerCase();
                const filteredSnippets = currentSnippets.filter(snippet => {
                    return snippet.code.toLowerCase().includes(search) ||
                        snippet.name.toLowerCase().includes(search)
                });

                setSnippets(filteredSnippets);
            }
        })();
    }, [searchQuery]);

    const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchQuery(event.currentTarget.value);
    };

    return (
        <>
            <Navbar active={"dashboard"} />
            <SpaceSeparator height={72} />
            <Container>
                <TextInput
                    name={"search-box"}
                    placeholder={"Search your snippets..."}
                    type={"text"}
                    onChange={handleSearch}
                    value={searchQuery}
                    className={"search-box"}
                />
                <div className={"snippets"}>
                    {
                        snippets && (
                            snippets.map(snippet => {
                                return (
                                    <Snippet name={snippet.name} code={snippet.code} id={snippet.id} key={snippet.id}/>
                                )
                            })
                        )
                    }
                </div>
            </Container>
        </>
    );
};


export default Dashboard;
