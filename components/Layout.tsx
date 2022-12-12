import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    <div>
        <Head>
            <title>byte3 | digital solutions for growth business</title>
            <meta name="description" content="byte3 | digital solutions for growth business" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
    </div>;
};

export default Layout;
