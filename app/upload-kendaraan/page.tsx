import { SearchBar  } from "@/components";
import { documents } from "@/contants";
import DocumentCard from "@/components/DocumentCard";

export default async function UploadKendaraan() {

  const allDocuments = documents

  const isDataEmpty = !Array.isArray(allDocuments) || allDocuments.length < 1 || !allDocuments

  return (
    <main className="overflow-hidden">

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <p>Explore the cars you migth like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          {/* <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div> */}
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__documents-wrapper">
              {allDocuments?.map((document) => (
                <DocumentCard document={document}/> 
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            {/* <p>{allDocuments?.message}</p> */}
          </div>
        )}

      </div>
    </main>
  );
}
