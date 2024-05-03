import ibmLogo from "../assets/ibmLogo.png"
import accLogo from "../assets/accLogo.png"
import pwcLogo from "../assets/pwcLogo.png"
import attLogo from "../assets/attLogo.png"

const Companies = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[1480px] m-auto  max-w-[600px]">
        <h1 className="text-center text-2xl font-bold text-[#536E96]">
          Trusted by over 10000 teams around the world.
        </h1>
        <p className="text-center   text-[#536E96] text-xl">
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
        <div className="flex justify-center py-8 md:gap-8">
          <img
            src={ibmLogo}
            style={{
              width: "90px",
              height: "40px",
              marginRight: "30px",
              marginTop: "15px",
            }}
          />
          <img
            src={accLogo}
            style={{
              width: "120px",
              height: "40px",
              marginRight: "30px",
              marginTop: "7px",
            }}
          />
          <img
            src={pwcLogo}
            style={{ width: "80px", height: "60px", marginRight: "30px" }}
          />
          <img
            src={attLogo}
            style={{ width: "100px", height: "70px", marginRight: "30px" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Companies
