import Search from "../search";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const spendingData = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2025, i).toLocaleString("default", { month: "short" }),
  amount: Math.floor(Math.random() * 1000000),
}));

const totalSpent = spendingData.reduce((acc, curr) => acc + curr.amount, 0);
function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #035323",
          borderRadius: "8px",
          padding: "10px 16px",
          fontSize: "0.85rem",
        }}
      >
        <p style={{ color: "#035323", fontWeight: "bold" }}>Month: {label}</p>
        <p style={{ color: "#333" }}>Spent: ₦{payload[0].value}</p>
      </div>
    );
  }
  return null;
}
function SpendingChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={spendingData}
        margin={{ top: 0, right: 0, left: 50, bottom: 0 }}
        style={{ cursor: "default" }}
      >
        <CartesianGrid strokeDasharray="4 2" stroke="" />
        <XAxis
          dataKey="month"
          tick={{ fill: "#333", fontSize: "1.00rem", fontFamily: "Raleway" }}
          axisLine={{ stroke: "#e0e0e0" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#333", fontSize: "1.00rem", fontFamily: "Raleway" }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `₦${value}`}
          width={50}
        />
        <Tooltip
          //   isAnimationActive={false}
          animationDuration={50}
          cursor={{ fill: "transparent" }}
          content={<CustomTooltip />}
        />
        <Bar
          //   isAnimationActive={false}
          animationDuration={100}
          type="monotone"
          dataKey="amount"
          stroke="#067533"
          radius={[6, 6, 0, 0]}
          fill="#035"
          strokeWidth={2}

          //   dot={true}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
function BasePage() {
  return (
    <div className="base-wrapper">
      <div className="side-panel">
        <div className="side-panel-topGroup">
          <div className="side-panel-topGroup-home">
            <i className="material-symbols-rounded">home</i>
          </div>
          <div>
            <i className="material-symbols-rounded">lab_profile</i>
          </div>
          <div>
            <i className="material-symbols-rounded">medication</i>
          </div>
          <div>
            <i className="material-symbols-rounded">history</i>
          </div>
        </div>
        <div className="side-panel-bottomGroup">
          <div>
            <i className="material-symbols-rounded">Settings</i>
          </div>
          <div className="side-panel-bottomGroup-home">
            <i className="material-symbols-rounded">Logout</i>
          </div>
        </div>
      </div>
      <div className="video-container">
        {/* <video autoPlay muted loop className="bg-video">
          <source src="/Abuja.mp4" type="video/mp4" />
        </video> */}
        <div className="base-main-panel">
          <div className="textarea">
            Welcome back [alamin] <Search />
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              ipsa optio laborum mollitia atque aliquam dolores architecto
              numquam nam quisquam, dignissimos ex, dicta similique est magni!
              Non nesciunt magni nostrum minima deserunt adipisci esse
              consequuntur, ut itaque natus quam totam distinctio nihil magnam
              consequatur sequi nulla eveniet maxime cum nisi laudantium.
              Nostrum quasi soluta reiciendis numquam! Deserunt consectetur
              magnam aliquid reiciendis dolor beatae libero facilis, ducimus
              ullam! Non, facere. Quos molestias impedit aperiam aspernatur
              reprehenderit, pariatur fugit quisquam tempore perferendis
              temporibus ratione voluptatibus consectetur. Facilis sequi
              mollitia sint in voluptatibus quas! Placeat ut ad perspiciatis non
              illo aliquam necessitatibus eum. Culpa illo laudantium ratione
              aperiam labore enim dignissimos consectetur, suscipit, itaque,
              doloremque ipsa alias rem! Ex ut maxime suscipit nostrum autem
              molestias, veritatis ea? Voluptatem, architecto quis, dolorum
              officia vitae at ut est rem blanditiis laborum voluptatum!
              Officiis architecto sunt repellendus natus quibusdam voluptatibus
              in optio numquam accusantium ratione, consequuntur ad fugiat
              quasi, ab nulla tempora. Ipsum esse rerum dolorem minima tempora
              quae animi, dignissimos distinctio doloremque officiis molestiae
              numquam iure commodi deleniti! Quasi id architecto dolorum illo
              qui reprehenderit, ullam quisquam a laboriosam eius dolorem
              eligendi ipsum aut mollitia distinctio officia enim consectetur
              accusamus ex beatae vel! Tempora dolor dolorem nostrum placeat
              minima. Sapiente, cumque nemo. Vitae inventore vel illum, nulla
              voluptas laboriosam aliquam modi consequuntur magnam facilis! Hic
              vero aliquid eos aspernatur! Aperiam nisi ipsam earum non tempora
              reprehenderit dolorum illum ratione architecto voluptate. Ex
              corporis aperiam iure laborum voluptate quibusdam consequatur non
              voluptates magnam inventore, labore veniam. Dolore asperiores
              dolores distinctio minima est harum accusamus voluptatum, quaerat
              optio illum fugit. Id placeat tenetur quia nam laudantium vitae
              facere eius expedita quod sit. Error fuga aut veniam ratione
              sapiente porro molestias dolor ipsa odit doloribus expedita ad,
              voluptatum praesentium fugit dolorem omnis adipisci optio ipsum
              eos dolores sit. Nostrum animi sit nam rerum. Corporis quibusdam
              reprehenderit numquam facere, possimus unde culpa quam libero quia
              veritatis autem omnis repellat laudantium illo est ducimus laborum
              ea dicta error modi iste ipsum, sit in non. Blanditiis est, error
              provident in consequatur quibusdam ea expedita qui laboriosam,
              ipsum quam excepturi dolor dicta reiciendis exercitationem
              incidunt vel? Officia nulla esse nesciunt necessitatibus nostrum
              officiis eligendi cupiditate nobis quo dolores a, sunt error
              quaerat itaque temporibus illo et porro aperiam exercitationem
              culpa iusto sed. Dolor quidem quia deleniti in saepe similique
              iure sapiente delectus error nulla dicta quisquam ipsam iste,
              fugit tempore quae necessitatibus libero quaerat maxime vitae
              officia? Quam ab eos quaerat amet? In nulla quo minima consequatur
              tempora, temporibus pariatur perspiciatis quas possimus autem,
              deleniti qui quam id facere voluptate. Commodi molestias neque
              deserunt explicabo omnis dolore doloribus maxime placeat debitis,
              nisi praesentium quod dolor dicta optio quos obcaecati a assumenda
              autem molestiae odio? Odit voluptate, fugiat eos incidunt
              laudantium blanditiis delectus, nemo consequatur sed maiores
              quidem consequuntur. Cum consequuntur cupiditate tempora velit,
              quo ratione explicabo ullam nostrum inventore sequi? Hic eligendi
              accusamus, error exercitationem dignissimos id, et itaque, ex
              corrupti repellendus reiciendis quae natus quaerat beatae facilis
              assumenda alias perspiciatis delectus?{" "}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                color: "#035323",
                fontWeight: "bold",
              }}
            >
              Total Spent: ₦{totalSpent.toLocaleString()}
            </div>
          </div>
          <div className="bmp-containers">
            <div className="bmp-box1">
              <SpendingChart />{" "}
            </div>
            <div className="bmp-box2">
              <div className="timeline">
                <div className="timeline-item">
                  
                  <div className="timeline-content">
                    <span className="timeline-date"> <div className="timeline-dot" />May 2026</span>
                    <h3>Iron checkup at Zankli</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit molestias pariatur rerum tempore iste ad, suscipit commodi praesentium blanditiis molestiae fugiat assumenda quidem odio totam dolore laudantium eligendi dolor dicta vel ipsam culpa earum repellendus sunt nisi. Eveniet recusandae beatae nisi accusamus quisquam error porro perferendis, sit dolor quis amet maiores, sed cupiditate fugiat iste! Repellat magni omnis maxime a quis veniam quasi, illo recusandae dolore sequi itaque cupiditate officiis ea minima aspernatur autem velit eius exercitationem non voluptates totam hic eos. Dolores, alias consequuntur atque excepturi, similique architecto neque magnam perspiciatis esse quos, labore fuga laboriosam corrupti? Doloremque, ipsa!</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-date">February 2026</span>
                    <h3>Blood test at Belam Medicals</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo! Eius ducimus nobis molestiae expedita id laboriosam. Ipsa explicabo doloribus excepturi, aperiam at deleniti quibusdam distinctio obcaecati possimus libero cupiditate. Saepe veniam sunt dicta praesentium doloremque. Similique amet eveniet ut itaque, impedit rem aliquam corporis minima autem deserunt tempore qui labore ex sapiente, reprehenderit explicabo dolorum porro possimus, repellendus soluta odit harum? Mollitia minima soluta voluptatibus. Qui, animi minus. Porro, omnis eligendi fugit quisquam iure similique, voluptates eius voluptatibus, illo ipsam aspernatur esse maxime voluptatem?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasePage;
