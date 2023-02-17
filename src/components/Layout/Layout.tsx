import { FC } from "react";
import LanguageSelector from "./components/LanguageSelector";
import NavigationBar from "./components/NavigationBar";
import styles from "./Layout.module.css";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<header className={styles.header}>
				<NavigationBar />
				<LanguageSelector />
			</header>
			<main>{children}</main>
			<footer>
				<p>Footer</p>
			</footer>
		</>
	);
};

export default Layout;