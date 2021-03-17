import Link from 'next/link';

function ArticlePage({ data }) {

    return (
        <>
            <div>
                <Link href={`/`}>
                    <a>Back</a>
                </Link>
            </div>
            <article>
                <h2>{data.title}</h2>
                <div>
                    {data.content}
                </div>
            </article>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API}/article/${params.id}/`);

    const data = await res.json();

    return { props: { data } };
}

export default ArticlePage