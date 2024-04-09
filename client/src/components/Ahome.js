import React from 'react'
import Anavbar from './Anavbar'
import Companyitem from './Companyitem'
export default function Ahome() {
  let articles=[
        {
            "name":"infosys",
            "post":"SDE",
            "ctc":"1000000LPA",
            "description":"Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url":"http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage":"https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt":"2020-04-27T07:20:43Z",
            "content":"Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
        ,
            {
                    "name":"TCS",
                    "post":"analyst",
                    "ctc":"500000LPA",
                    "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                    "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                    "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                    "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                    "publishedAt":"2020-04-27T11:41:47Z",
                    "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
                },
                {
                        "name": "Wipro",
                        "post": "Intern",
                        "ctc": "100000LPA",
                        "author":null,
                        "title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
                        "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
                        "url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
                        "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
                        "publishedAt":"2020-03-30T15:26:05Z",
                        "content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
                        },
                        {
                          "name":"TCS",
                          "post":"analyst",
                          "ctc":"500000LPA",
                          "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                          "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                          "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                          "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                          "publishedAt":"2020-04-27T11:41:47Z",
                          "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
                      },
                      {
                        "name":"TCS",
                        "post":"analyst",
                        "ctc":"500000LPA",
                        "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                        "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                        "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                        "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                        "publishedAt":"2020-04-27T11:41:47Z",
                        "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
                    },
                    {
                      "name":"TCS",
                      "post":"analyst",
                      "ctc":"500000LPA",
                      "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                      "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                      "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                      "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                      "publishedAt":"2020-04-27T11:41:47Z",
                      "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
                  },
    ]
  return (
    <div>
      <Anavbar/>
      <div className='mt-4'>
      <div className="container">
        <div className="row">
            { articles.map((element)=>{
                return <div className="col-md-4">
                     <Companyitem cname={element.name} post={element.post} ctc={element.ctc}/>
                </div>
            })}
             </div>
             </div>
    
             </div>
    </div>
  )
}
