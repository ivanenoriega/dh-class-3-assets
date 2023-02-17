import en from "@/locales/en";
import fr from "@/locales/fr";
import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./LanguageSelector.module.css"

const LanguageSelector = () => {
	const router = useRouter();
	const { locale } = router;
	const texts = locale === "en" ? en : fr;

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		router.push(router.pathname, router.pathname, { locale: e.target.value })
	}

	return (
		<label>
			{texts.selectLanguage}
			<select onChange={handleLanguageChange}>
				<option value="en">English</option>
				<option value="fr">French</option>
			</select>
		</label>
	)
}

export default LanguageSelector