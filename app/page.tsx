"use client";
import Editor from "@/components/Editor";
import LanguageSelector from "@/components/LanguageSelector";
import { languages } from "@/utils/utilities";
import { useState } from "react";

function Home() {
	const [language, setLanguage] = useState(languages[0].name);
	return (
		<main className=' bg-background'>
			<header>
				<LanguageSelector />
			</header>

			<div className='flex items-center justify-center w-full'>
				<Editor language={language} />
			</div>
		</main>
	);
}

export default Home;
