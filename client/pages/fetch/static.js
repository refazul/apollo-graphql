import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ launches }) {
    return (
        <div className="">
            <Head>
                <title>Static Props</title>
            </Head>
            <main className="">
                {launches.map((launch) => (
                    <div key={launch.id} className="">
                        <h3><a href="#" ></a>{launch.site}</h3>
                        <p>
                            {launch.mission.name}
                        </p>
                    </div>
                ))}
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            query Lauchces {
                launches {
                    launches {
                        id
                        site
                        mission {
                            name
                        }
                    }
                }
            }
        `,
    });

    return {
        props: {
            launches: data.launches.launches.slice(0, 4),
        },
    };
}