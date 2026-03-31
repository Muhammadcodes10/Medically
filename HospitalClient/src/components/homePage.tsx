// This will be the main page of the hospital dashboard.
function TicketScanner() {
  return (
    <>
      <div className="container-homePage">
        <div className="sidepanel-container">
          <div className="side-panel">
            <div className="side-panel-topGroup">
               <div>
                <i className="material-symbols-rounded">qr_code_scanner</i>
              </div>
              <div>
                <i className="material-symbols-rounded">dashboard</i>
              </div>
              <div>
                <i className="material-symbols-rounded">payments</i>
              </div>
              <div>
                <i className="material-symbols-rounded">group</i>
              </div>
             
            </div>
            <div className="side-panel-bottomGroup">
           

              <div>
                <i className="material-symbols-rounded">Settings</i>
              </div>
              <div>
                <i className="material-symbols-rounded">Logout</i>
              </div>
            </div>
          </div>
        </div>
        <div className="whole-panel">
          <h1 className="ticket-header">
            
                <i className="material-symbols-rounded" >qr_code_scanner</i>
              Ticket scanner
            <p className="ticket-subtext">
              {" "}
              Scan tickets to verify patient booking
            </p>
          </h1>
          <div className="main-panel">
            <div className="leftBox">
              <div className="leftBox-heading">
                <h2> Camera Feed </h2>
                <p className="leftBox-heading-subtext">
                  {" "}
                  Position the QR code within the frame
                </p>
              </div>
              <div className="leftBox-prompt">
                <h3>
                  Scanner paused</h3>
                <div className="leftBox-scannerContainer">
                <i className="material-symbols-rounded" >qr_code_scanner</i>
                <p> Upload Ticket Image</p>
                </div>
              </div>
            </div>
            <div className="rightBox">
              <div className="rightBox-heading">
                <h2>Verification result </h2>
              </div>
              <div className="rightBox-prompt">
                <img
                  className="rightBox-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX///9awJEAAAACAgJbw5NawJJYwZHd3d0BAwFYxJPl5eUqKioDAQP5+fl8fHycnJwwMDBkZGQPHBVKl3Ps7OweHh6rq6ssVkILFA8xXEeQkJDIyMidnZ3X19fBwcFXV1cfPi4aMCU4bVVCgmVCQkI7d1pYuI21tbVHjG06OjpQo30PDw9Qp39WsokzZU2RkZFTU1MeLyYhPC8sV0ETIxkqTT1Vp4NOm3g+fl8JYiHkAAAKXklEQVR4nO1di1biOhSVkoSGd20RBEUKglgoM+PgcP//y25ehaJWWshpEbLXus7MVdtscnLeSW5uDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDK4PjYbnVSscVc9rNIoejk40qoOXVtN5ri2sCIvas9NsvQyqP55owxs8OK8dKwmdV+dh4P1cmo8tp70lUy6X+X+7L9vvtJ3WY9FDPQLesFnecSsnf1E/0xx6RQ85Ex77zxG3PcQ4f/r/z/0fM5Pe3ZPiIajYduIytCzbVrMp/vV09xMmstKvxaepLoZ+64+6q+nEdTdBsNm47mQ6/jvyb/cnlP+j1q8UTeAAqv3ObtRymtbdqbuczUoII0QpZX9QxL6UZuHSnXbXSm7rdTWRnX61aBLfoNLczQr/S/1tNQ8FrRIDxqUI8q/iO6G7eqvv/ZbVPNd5bPxqb2WOW/XRNJghSe4bsJ+YBdPRwor9bvvXWZrIl9fIMnD406CEECGxifsaGBPCpDaY+nzSowe8vhRN5xMqTmz59bouRpgc4LZPFGG324utYOfMRPWuFpkH9ucqwOjw5H2aSoSCVewptbuiScVQedoJ6HocokNrLwkIheP17lFPZzONQ6lhmMK3evdhxsn7OJXhPZPVel1qnGHR1AQafSVajOB7gGmm5fcJhOLgnVFUonoOStX7LaWK8fPnbP2dRpBRJAjPfc5RTOPvwv24x2e5bhjBbniKfMZJollXUuQOecGLccj5CYHyXaqHn+BIXV+KPnt+oYvxZRGpmG7IFOipErpjWEJhN1I4iwKtf2sroRN8rIVIAsKTraS2iiL4EFku30Xapi/GUUoqf8FDcQTlElxqUjEfKS63i7EQiq3o7V3tErqlyHWq/BQLENSXSILuZ1AEOcX76DW5q5vhQr15lS2GyAiMV4riImej8agyoNb4JDc0DcbqTVaupt97VstjVYITUQk0W6kF/5yjA9f4LRQAW4PQE8jlFN2rtz3l54b3laHvziDXYAQiNCqXmF95ERzyFzJXzQfUonEg/Ec4cLm5qJW2nEF/mQ9BafqFA9fOR9s8KZkBcdUSKLrqnU95ELyTIb01yWsGOehEvtTKIT1VqSktA2rpPwErbVODl1NHqm4/zHMKmZyGf6TJcKAJvqgFscmXIKO4UW8GdlAbr7xOVLa6GlMWKUG74s3WK6zd/yVMIZPRk3Nq2RG+WXVwu19tS0mZ5y2jHHgu5bQNWWBsSp39Du+OfknxXb6+CUewKj/EXlDEFDJlE/SkCMFNYl/GTPf5msItCL6XcVQfimClI0zSbXhibeJohjS8FSPoQJl9GTSxsL4YgnwSx1JMgSbRq0nXUFd54gigUDrFNZhw/07awlUxakZRXEmbCOOAi6ipMEWqGAp1ChRFPcpV2C1ORjlYjCFWIkQPXF/Fvfl7pHFEsTCAruEJRPZkH16RkhJBNElSCPbFOABSi0PpMU3hbSEu4eUmKfzEaCqq/ABJKeGS1hcBfHKGzlY9a+1+TRHjwBYM9TunZTGHI2h6JSpqagwB+lJSCR4JYSrrJviohBTaVBC0EQvNZuvh67XIxRRCm7aEQ1iHN4ZzkURgnkUSw9KyLMaiuaLYcIQGe5vB0kN4HDWa9pZJOm32Jsbi6M1meG3xua1gNakoiKp2qHmiSqMrMZa2Xnsx4DnEOrC5p8u3qFboJy8HTOe8D9WyBloZPsjVHQLyIyhYW2VbMHz7JhuLeYChv0HDEWHFGk7PEIImC9kjzFsDvpUVtLZsvhB1Emy8Sq8bsidhq2Ps6YHmKvpXMNSaOK12LKnAYehhjPC92hpl2ZNDbhOVFrGjMyE1kJIPpmjo8k/UVbL+R8mBAA25thiOTlUjqhXWLUxJlBAs/Rjubo6Whz9FtLy1dFcwZP+TD6NKCZ7bUf96N1XhPPS190nJXPcIxqOJ/Bib6ZhUDWRkNtKe+5Y+WxeCH+W1T7UG52kzJH+l36aPYEPG9xBZNhS8RW2kfurYE61knK/PXDREZRsgdCJU6piy0DFpH4/xVFa89TH0RJseQG8C1zHMeluH/Zi930ITMZ6FPt/bk9Y49TJJB0J2sZKVTscoUFd6d/oYVlMZ/IybgYjoyZNDtSc0izNBXTkgfU5NRT5w890oUBgsS1lSjbLHWbZRBzRT1Zxu5ID0laBSMERzv7fO0k3L8zH1SMdk8wYJDYAYBskDQUuRHxunXKmkRCc9TrB+TBs1HMPkOSRoKmtC83SzQWfTaLfUIns5sgiGPKBJ36+IKY+V1ObtYxS0/nV4UJditLSlVvRTDJhG+yjYJ/LvGBurX5cetIcEyzwtj5IPUSQxHfP+7ygTq98epvBpCH5XG0wOdBMRNN/t5zuuyRjAp0njl1IWtIlE2Xr53ehEPsaO/Jjjsq8Afmmq2II3D6qOqaSBEyI3wdhiX+Hk6FKk/tgiXXwoE0Rs+IlWkaB/sZzvCflz7fFhuhifyBq7bS3mCYUxnvNVOuYtzOao7T0HIMZPl6dB4Vo50uEXdgVjNO9FrjaLlU4IVADyNKlybZgtxZ7MR7x/MduqrlQXOd+TugEgcm1p86V0bNVF1WT88bMgdLfR7tRQGiJfmjLnTWT34Fc9tvRfPOd7EkGQnHfqugXi3YPCKu5Vj/b9mFOTIRB1i/S1J+r2pMOytxTR3I4qnxnyMUmAqD1lqB/iqVKXO/+ARnWlumWnjSC/eQFM/TB9DZiU3qMtGeqHkdrvImKl09N1QDXgDHV8Gqp2EWlcpB9jq5yvjuIVTB0/Sy8GctUuaO6gRv0xx+RjEgDTi5GhnwYT9J/aEDmmqq4U5Xy1dHLA9NNk6oki6F2VIuZ4bB+V8/0GUD1RWfraiHJQmSfb3eV8kZ4CctTXttBNMFtvIt1sT16Lcr6aah6AvYnZ+ktVrFjOXFc6yBCuvzRbj3CUtimrWElb1QqwRzhjnzcKlZEoH5Pz/ea5cH3eWXv1Zda2LhSqxqocZK9+1v0WfCky/NHakgq63yLjnhnMY0UWK+ntwYHdM7Pd95S63u7+N8da26iA9z1l37uGjj4j8mtA7127gv2Hl7+H9Ar2AV/+Xu4r2I+/PVNBUzCbCaGfw5kKV3AuxuWfbXIF59NcwRlDxZwThXI8J+oKzvq6gvPaLv/MvSs4N7Gosy9/53gE/cWfX3oFZ9BewTnCV3AW9BWc5713JjsMxaLPZL+Cc/Wv4G6ET/dbaMPZ3G/x4Y4SfZJ6PneUsEAD4J6Z0jndMwN+V9BT4XcF8SvzLvy+p5vLv7PrJnZxHr+QU9+9a2d1fd6l3513cwX3H95c/h2WN1dwDylDNfVdsopcwl2y53xf7qXfB8zx4U5nSfPWH/39cKdz94fe6cxx6fdyC1z43eoC3rAZ55P8Rc1lc/hjpi+Gx5bT3srjJ3Lb77Sd1s+avTga3qDlvHYSl2Hn1XkYeOdq/FKjUR28tJrOc22xZbaoPTvN1sug+uPJxdFoeF61wlH1vMZFUTMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBIif8Bv04AQeg6DDEAAAAASUVORK5CYII="
                />
                <h3>Ticked Verified!</h3>
                <p className="rightBox-prompt-subtext">
                  {" "}
                  Patient successfully validated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketScanner;
