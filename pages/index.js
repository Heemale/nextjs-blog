import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

//{allPostsData}加引号代表是一个对象吗还是Props属性都要加{}
export default function Home({allPostsData}) {
    return (
        <Layout home>

            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>替身：Star Platinum</p>
                <p>名称来自塔罗牌“星星”</p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <br />
                            <Link href={`/posts/${id}`}><a>{title}</a></Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}></Date>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}