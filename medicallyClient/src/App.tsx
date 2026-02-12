import {
    APIProvider,
    Map,
    AdvancedMarker,
    // Pin,
    // InfoWindow
} from '@vis.gl/react-google-maps'
import { useState } from 'react';

function Intro(){
    const position = { lat: 9.072, lng: 7.491};

    return(
        <APIProvider apiKey= "AIzaSyBAsK-rpRGClF9XrdK8wyadzI-o-UKZ5CI">
          <div style={{ height: "100vh", width: "100vw" }}> 
            <Map mapId={"cac5666d3af318eaf31e234b"} defaultZoom={10}
      defaultCenter={position} style={{ height: "100%", width: "100%" }}  >
              <AdvancedMarker position={position}>

              </AdvancedMarker>
            </Map>
          </div>
          </APIProvider>
    )
}



function Search(){
  const [clicked, setClicked] = useState(false)
  return(
    <>
    <h1> Medically.co is the bridge that connects patients to doctors. </h1>
    <form>
      <label htmlFor="searchbar">What treatment are we looking for today? </label>
      <input type="text" id="searchbar"></input>
      
    </form>
    <button type="submit" onClick={() => setClicked(true)}>Submit</button>
      {clicked === true && <Intro/>}
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus perferendis natus dolores aperiam exercitationem accusantium sapiente quam voluptates quasi ad eius adipisci perspiciatis suscipit ipsa dolorem animi velit ea voluptatum impedit ab maiores similique, iure excepturi. Nemo neque perferendis velit libero excepturi. Impedit quisquam eveniet laboriosam cupiditate sint, ullam rerum ad ipsa quos sit. Eum aliquam magnam, enim facilis nostrum vel rem inventore, dolorem consequatur velit totam quod nulla cumque vero eveniet distinctio modi aut debitis molestiae quidem ex, in rerum. Sunt dolore, tempora eaque at doloribus quo perferendis nostrum, dicta exercitationem doloremque reprehenderit ducimus. Animi enim itaque dolore ex fugiat provident quaerat, facilis consequatur ipsum veniam consectetur quod vitae ducimus sequi sit aut quis molestiae, quisquam neque eaque in quos nisi? Earum eaque, dolore suscipit debitis laboriosam optio eveniet temporibus quidem quasi eligendi, aspernatur fugiat sunt autem! Accusamus aut enim quam laboriosam, quas commodi ipsam atque mollitia quibusdam praesentium maiores unde minima, quidem numquam voluptas ex quia tempora placeat nostrum sit. Facilis sequi suscipit, illo laborum sunt eos amet! Blanditiis repellat magni facere vero nihil impedit nam ea illum sapiente obcaecati? Magni perferendis dicta voluptatum dolore eaque tempora repellendus provident in facilis iusto totam laudantium ipsum, consequatur ratione harum. Sunt officia saepe facere nulla maxime! Praesentium minima quibusdam sapiente iusto nostrum mollitia repellat numquam laborum, alias enim libero? Commodi iusto natus deleniti totam consectetur eum quasi nulla, accusamus velit aperiam asperiores, officia, eligendi nesciunt? Dolores quod exercitationem molestias consectetur quia magnam ad molestiae nemo, numquam architecto nulla, commodi quas? Obcaecati, nobis? Id praesentium eum ipsam! Corrupti consequatur, distinctio nisi, ab praesentium vitae dolorum, velit iusto possimus ad voluptatem atque debitis fugiat recusandae laboriosam sed tempora ex officiis numquam suscipit ut obcaecati. Incidunt aspernatur odio doloremque ea magnam magni, nobis, quasi quibusdam temporibus delectus ex dicta officia. Nemo quis porro omnis facilis ex quia a, tempore at vel sit sint sed harum doloremque illum placeat distinctio quod ipsam amet cumque inventore repudiandae? Possimus officia earum, molestias officiis quas corporis numquam voluptatum expedita corrupti sed id accusantium a repudiandae nulla beatae dicta doloribus vitae. Voluptatem debitis repudiandae explicabo, perspiciatis cumque praesentium veritatis, facilis nihil possimus, minus id voluptatibus distinctio fuga earum asperiores. Ullam enim, hic aspernatur fugit nam et, iure minima magnam distinctio recusandae earum, nemo temporibus aliquam eum. Tempore, iure! Iste, distinctio, ullam obcaecati culpa quae deserunt labore veritatis soluta adipisci totam error ea ducimus laudantium sequi saepe aliquid. Odio laudantium nemo doloremque suscipit deserunt quae reprehenderit. Ipsam cumque doloremque nam optio unde deserunt rerum sapiente nisi fugit omnis, amet laudantium sint error adipisci quas pariatur velit quis corrupti, aliquid doloribus itaque, aperiam blanditiis quaerat rem. Soluta eligendi facere aperiam nihil voluptas eum deleniti. Ipsa suscipit ducimus accusamus ipsam, consequatur sapiente ullam totam a perspiciatis? Unde, expedita. Eaque quisquam, dicta obcaecati inventore sapiente recusandae odit ea aperiam neque possimus? Qui, blanditiis. Eligendi minus nam deleniti hic cupiditate repellat in beatae exercitationem eaque molestiae explicabo atque veniam ut excepturi, accusantium ipsam, doloribus non quo ipsa placeat fugit omnis! Molestiae consequuntur blanditiis nam ipsum illum cupiditate laboriosam, asperiores repellat possimus natus excepturi quisquam nulla voluptate provident veniam suscipit debitis maiores deleniti libero aspernatur optio voluptates qui magnam doloremque. Distinctio debitis, ut facilis doloremque nam dolores reiciendis quibusdam qui, nostrum voluptates molestias vel excepturi sint tempora omnis odio. Facilis cupiditate optio blanditiis suscipit magni. Aliquid incidunt doloremque saepe perspiciatis eos doloribus aspernatur veniam. Neque dicta totam incidunt corrupti magni ex blanditiis vitae iure aliquid! Natus nobis adipisci nesciunt deleniti eligendi odio qui reprehenderit repellat sed! Perspiciatis voluptates, sint architecto sit vero omnis praesentium perferendis laborum tenetur deleniti a eaque inventore reprehenderit obcaecati alias nulla autem dolores! Amet consectetur exercitationem cum quaerat? Velit porro iste fuga reprehenderit explicabo. Ab, aspernatur doloremque quos rem sequi cupiditate, delectus soluta quibusdam sapiente numquam perferendis exercitationem commodi velit expedita ea! Amet, ipsa dignissimos, deserunt sit perferendis eligendi commodi labore quasi explicabo quisquam sed accusamus? Recusandae ullam explicabo at vitae tempore maiores ut facilis, quos itaque quam molestias, atque beatae corrupti dolorem enim dicta, eos fugit alias. Veritatis minima iusto eligendi odio quidem beatae necessitatibus voluptas perspiciatis, vitae eveniet optio tempora, numquam perferendis nulla provident repellat inventore id ipsa reiciendis? Nemo nesciunt fugiat quos odit dignissimos veritatis nisi consectetur quasi! Magni laboriosam atque doloribus architecto veniam autem odit porro, in explicabo omnis maxime suscipit pariatur est nesciunt dolore debitis temporibus distinctio inventore et itaque. Porro commodi fugiat dolorem vel possimus blanditiis nobis iste deleniti iusto? Unde odit quos nihil praesentium, cum iusto saepe blanditiis, aliquam quaerat voluptas dicta repudiandae repellat aperiam natus commodi dolores dolor officiis sequi! Dicta beatae fuga laboriosam, voluptatibus modi perspiciatis nostrum soluta, sint minus ipsa officia dolor reprehenderit veniam necessitatibus commodi neque doloremque dolores iure consequatur. Vero sit sint natus, inventore cumque ut nostrum repudiandae est perferendis officia iure expedita mollitia rerum quis aliquid aut eaque magni rem, corporis nihil! Repellat molestias hic quisquam tenetur harum eaque dolor ex cupiditate excepturi dolore, aut alias minus illum placeat maiores, tempore ea ipsum saepe corporis nesciunt suscipit recusandae. Incidunt fugit quibusdam soluta delectus eveniet voluptates praesentium minima eum est eligendi, non cupiditate ratione exercitationem voluptate ullam impedit quod ipsam, numquam tenetur. Impedit perferendis incidunt quas facere sit eius beatae optio quasi, dignissimos deserunt est placeat inventore! Qui pariatur est ut facilis voluptatibus reprehenderit facere deserunt iusto, dolor nostrum culpa totam fuga quaerat asperiores earum quos maxime nemo vero excepturi? Sint consequuntur cum rem iure molestias, earum inventore, rerum qui aut alias numquam labore quis tempore harum id asperiores repudiandae ducimus. Sapiente suscipit molestiae nemo, nam tempore omnis sed fuga doloribus, adipisci, distinctio impedit. Repellat sit ratione laboriosam eius officiis labore sint expedita? Dolor corporis iste earum aliquam sunt et eos possimus voluptate, explicabo quis atque praesentium molestias ab beatae! Est sint blanditiis cumque minus minima eveniet eos tenetur ipsam repellendus, eum esse aperiam doloribus delectus, iusto excepturi nemo molestias ea impedit, consectetur eligendi sunt ipsa quidem? In ex culpa delectus quis vel voluptas maiores debitis, rerum eius hic non, tenetur beatae officiis nobis! Aspernatur, quae voluptas.</p>
    </>
  )
}

function App() {
  return <> 
  <Search/>
  </>;
  
}
export default App;
