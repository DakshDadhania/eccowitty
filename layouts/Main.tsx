import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';
import {Providers} from "../pages/providers";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Ecowitty Ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        <Providers>
        { children }
        </Providers>
      </main>
    </div>
  )
}