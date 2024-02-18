import Container from "@/components/shared/Container";
import CounterScroller from "@/components/shared/CounterScroller";

const HanpingHand = () => {
  return (
    <div className=" bg-slate-50  h-[80vh]">
      <Container className="setBgImageHelpHand h-full ">
        <div className="flex flex-col w-3/4 pt-12 mx-auto items-center justify-center gap-4 ">
          <p className="text-secondary text-xl">Hoope at glance</p>
          <h1 className="text-[#191F28] text-3xl lg:text-5xl font-bold pb-2">
            Have A Helping Hand For Hope.
          </h1>
          <p>
            At Food Distribution and Supplies Management System, our mission is
            to provide timely access to essential resources
          </p>
        </div>

        <div className="flex justify-around pt-12">
          <div>
            <div className="text-5xl font-bold flex items-center">
              <h1 className="text-primary">$ </h1>
              <CounterScroller start={1} end={629} />
              <h1 className="text-secondary"> M</h1>
            </div>
            <h1 className="text-center text-xl text-secondary -mt-8">
              We've helped raise
            </h1>
          </div>

          <div>
            <div className="text-5xl font-bold flex items-center">
              <CounterScroller start={1} end={79} />
              <h1 className="text-secondary">K+</h1>
            </div>
            <h1 className="text-center text-xl text-secondary  -mt-8">
              Projects funded
            </h1>
          </div>

          <div>
            <div className="text-5xl font-bold flex items-center">
              <CounterScroller start={1} end={13} />
              <h1 className="text-secondary">M+</h1>
            </div>
            <h1 className="text-center text-xl text-secondary -mt-8">
              People will be served
            </h1>
          </div>

          <div>
            <div className="text-5xl font-bold flex items-center">
              <CounterScroller start={1} end={124} />
              <h1 className="text-secondary text-6xl -mt-2">+</h1>
            </div>
            <h1 className="text-center text-xl text-secondary  -mt-8">
              Countries
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HanpingHand;
