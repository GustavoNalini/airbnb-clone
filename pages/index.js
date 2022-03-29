import Head from "next/head"
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard";

export default function Home( { exploreData } ) {
  return (
    <div>
      <Head>
        <title>Papa airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
           <h2 className="text-4xl font-semibold pb-5"> Explore Nearby
           </h2>

           {/* Pull some data from a server - API endpoints */}
          <div className="gird grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-slate-300">
           {exploreData?.map(({img, distance, location}) =>(
              <SmallCard
              key={img}
                img={img} 
                distance={distance}
                location={location}
              />
           ))}
          </div>
        </section>
      </main>

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch ("https://links.papareact.com/pyp"). 
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
  
}