import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGetGalleryQuery } from "@/redux/feathers/gallery/galleryApi";
import { TGallary } from "@/types";

const Gallery = () => {
  const gallery = useGetGalleryQuery(undefined);

  return (
    <Container className="mb-8">
      <SectionTitle
        fTitle="Image"
        lTitle="Gallery"
        description="At Food Distribution and Supplies Management System, our mission is to
          provide timely access to essential resources, promoting food security
          and well-being for all members of our community."
      />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-2">
          <div className="">
            {gallery?.data?.slice(0, 6).map((item: TGallary, index: number) => (
              <div key={index} className="group cardHover">
                {index === 0 && (
                  <div>
                    <img className="gallaryImage" src={item.image} />
                    <div className="absoulateDiv"></div>
                    <div className="cardContetWrapper">
                      <h1 className="font-dmserif text-3xl font-bold text-white">
                        Food Distribution
                      </h1>
                      <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Provide timely access to essential resources, promoting
                        food security and well-being for all members of our
                        community.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            {gallery?.data?.slice(0, 3).map((item: TGallary, index: number) => (
              <div key={index} className="group cardHover">
                {index === 1 && (
                  <div>
                    <img className="gallaryImage" src={item.image} />
                    <div className="absoulateDiv"></div>
                    <div className="cardContetWrapper">
                      <h1 className="font-dmserif text-3xl font-bold text-white">
                        Clothes
                      </h1>
                      <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Provide timely access to essential resources, promoting
                        food security and well-being for all members of our
                        community.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            {gallery?.data?.slice(0, 6).map((item: TGallary, index: number) => (
              <div key={index} className="group cardHover">
                {index === 2 && (
                  <div>
                    <img className="gallaryImage" src={item.image} />
                    <div className="absoulateDiv"></div>
                    <div className="cardContetWrapper">
                      <h1 className="font-dmserif text-3xl pb-8 font-bold text-white">
                        Medicine
                      </h1>
                      <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Provide timely access to essential resources, promoting
                        food security and well-being for all members of our
                        community.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            {gallery?.data?.slice(0, 6).map((item: TGallary, index: number) => (
              <div key={index} className="group cardHover">
                {index === 5 && (
                  <div>
                    <img className="gallaryImage" src={item.image} />
                    <div className="absoulateDiv"></div>
                    <div className="cardContetWrapper">
                      <h1 className="font-dmserif text-3xl font-bold text-white">
                        Bread
                      </h1>
                      <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Provide timely access to essential resources, promoting
                        food security and well-being for all members of our
                        community.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 mx-auto rounded-md">
          {gallery?.data?.slice(0, 6).map((item: TGallary, index: number) => (
            <div key={index} className="group cardHover">
              {index === 4 && (
                <div>
                  <img className="gallaryImage" src={item.image} />
                  <div className="absoulateDiv"></div>
                  <div className="cardContetWrapper">
                    <h1 className="font-dmserif text-3xl font-bold text-white">
                      Break Fast
                    </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Provide timely access to essential resources, promoting
                      food security and well-being for all members of our
                      community.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
