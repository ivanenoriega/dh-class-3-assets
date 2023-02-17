import en from "@/locales/en"
import fr from "@/locales/fr"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./NavigationBar.module.css"

const NavigationBar = () => {
	const router = useRouter()
	const { locale } = router
	const texts = locale === "en" ? en : fr
	return (
		<nav>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<Link href="/">{texts.navHome}</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="/board">{texts.navBoard}</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavigationBar