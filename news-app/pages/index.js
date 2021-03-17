import Link from 'next/link';

function NewsPage({ data }) {

    return (
        <>
            <h3>Latest News</h3>
            <ul>
                { data.map(item => (
                    <li key={item.id}>
                        <Link href={`/article/${item.id}`}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                )) }
            </ul>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API}/catalog/`);

    const data = await res.json();

    return { props: { data } };
}

export default NewsPage