import React, { useEffect, useState } from 'react'
import styles from './HostingPage.module.css'
import { FaPlus } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import { cricketMatchh } from "../../utils/Api"
import { useAppContext } from '../../context/AppContext';
import axios from 'axios';
import {useParams} from "react-router-dom"


const HostingPage = () => {

    const {id} = useParams()
    
  const { wholedata, setWholedata } = useAppContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/findcurrentmatch/${id}`,{
          withCredentials: true
        });
        setWholedata(response.data);
       
        console.log("first",response.data);
      } catch (error) {
        console.error('API Error:', error);
      }
    }
    fetchData();
  }, [])

  const [teamSelect, setTeamSelect] = useState(0)
  const [whichBatter, setwhichBatter] = useState(0)
  const [playerSelect, setPlayerSelect] = useState(true)
  const [bowlercontainer, setbowlercontainer] = useState(true)
  const [playerName1, setPlayerName1] = useState(0)
  const [playerName2, setPlayerName2] = useState(0)
  const [bowlerName, setbowlerName] = useState(0)
  const [teamA, setteamA] = useState(null)
  const [cricketMatch, setcricketMatch] = useState(cricketMatchh)
  const [matchData, setMatchData] = useState(null); // Holds match data


  console.log("wholedata",wholedata);
  
  useEffect(() => {
    if (wholedata && wholedata.teams) {  // ✅ Ensure teams exist before setting
      setMatchData(wholedata);
    }
  }, [wholedata]);

  
  

  useEffect(() => {
    if (matchData) {
      setWholedata(matchData);
      const timer = setTimeout(async () => {
        try {
          const response = await axios.patch(
            `http://localhost:3000/api/matchupdate/${id}`,
            matchData,
            { withCredentials: true }
          );
          console.log("API Updated:", matchData);
          
        } catch (error) {
          console.error("API Error:", error);
        }
      }, 800); // 🛑 Prevents rapid requests
  
      return () => clearTimeout(timer);
    }
  }, [matchData]);  // ✅ Runs only when `matchData` updates

  


  const handelteamSelect = (i) => {
    setTeamSelect(i)
  }
  const handelWhichBatter = () => {
    setwhichBatter(0)
  }
  const handelWhichBattersecond = () => {
    setwhichBatter(1)
  }

  const handelPlayercontainerOprnbtn = (data) => {
    setPlayerSelect((prev) => !prev)
    setteamA(data);

  }
  const handelBowlerbtn = () => {
    setbowlercontainer(pre => !pre)
  }
  const closeDrawer1 = (i) => {
    setPlayerSelect((prev) => !prev)
    setPlayerName1(i)
  }
  const closeDrawer2 = (i) => {
    setPlayerSelect((prev) => !prev)
    setPlayerName2(i)
  }
  const bowlerDrawer = (i) => {
    setbowlercontainer((prev) => !prev)
    setbowlerName(i)
  }

  const increaseRunByOne = () => {
    setMatchData((prevMatchData) => {
      if (!prevMatchData) return prevMatchData;

      const updatedMatch = { ...prevMatchData };
  
      const batterIndex = whichBatter === 0 ? playerName1 : playerName2;
  
      // Update runs and balls faced for the selected batter
      updatedMatch.teams[teamSelect].players[batterIndex].runs += 1;
      updatedMatch.teams[teamSelect].totalRuns += 1; // Update total runs
      updatedMatch.teams[teamSelect].players[batterIndex].ballsFaced += 1;

     
  
      return updatedMatch;
    });
  };
  
  

  const decreaseRunByOne = () => {
    setMatchData((prevMatchData) => {
      if (!prevMatchData) return prevMatchData;
  
      const updatedMatch = { ...prevMatchData };
      updatedMatch.teams[teamSelect].players[whichBatter === 0 ? playerName1 : playerName2].runs -= 1;
      updatedMatch.teams[teamSelect].totalRuns -= 1;
      updatedMatch.teams[teamSelect].players[whichBatter === 0 ? playerName1 : playerName2].ballsFaced -= 1;
  
      setWholedata(updatedMatch);
      return updatedMatch;
    });
  };
  

  const increaseRunByTwo = () => {
    setMatchData((prevMatchData) => {
      if (!prevMatchData) return prevMatchData;
      
      const updatedMatch = { ...prevMatchData };
      updatedMatch.teams[teamSelect].players[whichBatter === 0 ? playerName1 : playerName2].runs += 2;
      updatedMatch.teams[teamSelect].totalRuns += 2;
      updatedMatch.teams[teamSelect].players[whichBatter === 0 ? playerName1 : playerName2].ballsFaced += 1;
  
      setWholedata(updatedMatch);
      return updatedMatch;
    });
  };
  
  const increaseRunByThree = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].runs += 3
    cricketMatch.teams[teamSelect].totalRuns += 3
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].ballsFaced += 1
  }
  const increaseRunByFour = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].runs += 4
    cricketMatch.teams[teamSelect].totalRuns += 4
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].ballsFaced += 1
  }
  const increaseRunBySix = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].runs += 6
    cricketMatch.teams[teamSelect].totalRuns += 6
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].ballsFaced += 1
  }
  const increaseRunByOut = () => {
    setMatchData((prevMatchData) => {
      if (!prevMatchData) return prevMatchData;
  
      const updatedMatch = { ...prevMatchData };
      updatedMatch.teams[teamSelect].players[whichBatter === 0 ? playerName1 : playerName2].isOut = true;
      updatedMatch.teams[teamSelect].totalWickets += 1;
  
      // Switch strike to the other batter
      setwhichBatter(whichBatter === 0 ? 1 : 0);
      setWholedata(updatedMatch);
      return updatedMatch;
    });
  };
  

  // useEffect(() => {
  //   setcricketMatch(cricketMatch)
  // }, [increaseRunByOne])

  return (
    <>
    {matchData && matchData.teams ? (
        <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <h1>LoGo</h1>
      </div>
      <div className={styles.cameraContainer}>
        <h1>Camera</h1>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.firstDataContainer}>
          {/* Bat container start */}
          <div className={styles.runsContainer}>
            <div className={styles.runcontainerfirstBox}>
              <button onClick={decreaseRunByOne} ><HiMinus className={styles.plusicon} /></button>
              <div className={styles.runBox}>{matchData.teams[teamSelect].totalRuns}/{cricketMatch.teams[teamSelect].totalWickets}</div>
              <button onClick={increaseRunByOne}><FaPlus className={styles.plusicon} /></button>
            </div>
            <div className={styles.extrabolscontainer}>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>6</button>
              <button onClick={increaseRunByOut}>Out</button>
            </div>
          </div>
          {/* Bat container END */}
          {/* Boals container start */}
          <div className={styles.runsContainer}>
            <div className={styles.runcontainerfirstBox}>
              <button ><HiMinus className={styles.plusicon} /></button>
              <div className={styles.runBox}>12.5</div>
              <button ><FaPlus className={styles.plusicon} /></button>
            </div>
            <div className={styles.extrabolscontainer}>
              <button>No</button>
              <button>wi</button>
              <button>Fhit</button>
            </div>
          </div>
          {/* Boals container end */}
          {/* current batters name  start*/}
          <div className={styles.currentBatterContainer}>
            <div className={playerSelect ? styles.playerBoxes : styles.disnone}>
              {
                (teamA == "teamA") ? (
                  matchData.teams[teamSelect]?.players?.map((item, i) => (

                    i % 2 == 0 ? (
                      <div className={styles.onlyplayername} key={i} onClick={() => closeDrawer1(i)}>{item.name}</div>
                    ) : ""

                  ))
                ) : (
                  matchData.teams[teamSelect]?.players?.map((item, i) => (
                    i % 2 == !0 ? (
                      <div className={styles.onlyplayername} key={i} onClick={() => closeDrawer2(i)}>{item.name}</div>
                    ) : ""
                  ))
                )
              }
            </div>
            <h2 className={styles.currentbattheading}>Currents Batters</h2>
            <div className={whichBatter == 0 ? styles.player1containermark : styles.player1container} onClick={handelWhichBatter}>
              <h2>{matchData.teams[teamSelect].players[playerName1].isOut == !true ? matchData.teams[teamSelect].players[playerName1].name : ""}</h2>
              <div>{matchData.teams[teamSelect].players[playerName1]?.runs}</div>
              <button className={styles.selectPlayerbtn} onClick={() => handelPlayercontainerOprnbtn("teamA")}>SP</button>
            </div>
            {/* second player */}
            <div className={whichBatter == 1 ? styles.player1containermark : styles.player1container} onClick={handelWhichBattersecond}>
              <h2>{matchData.teams[teamSelect].players[playerName2].isOut == !true ? matchData.teams[teamSelect].players[playerName2].name : ""}</h2>
              <div>{matchData.teams[teamSelect].players[playerName2]?.runs}</div>
              <button className={styles.selectPlayerbtn} onClick={handelPlayercontainerOprnbtn}>SP</button>
            </div>
          </div>
          {/* current batters name End */}
          {/* current bolwer name ------*/}
          <div className={styles.currentBatterContainer}>
            <div className={bowlercontainer ? styles.playerBoxes : styles.disnone}>
              {
                matchData.teams[teamSelect == 0 ? 1 : 0]?.players?.map((item, i) => (

                  <div className={styles.onlyplayername} key={i} onClick={() => bowlerDrawer(i)}>{item.name}</div>
                ))}
            </div>
            <h2 className={styles.currentbattheading}>Currents Bowler</h2>
            <div className={styles.player1container}>
              <h2>{matchData.teams[teamSelect == 0 ? 1 : 0].players[bowlerName].name}</h2>
              <div>2.3</div>
              <button className={styles.selectPlayerbtn} onClick={handelBowlerbtn}>SP</button>
            </div>

          </div>
        </div>

        <div className={styles.SecondDataContainer}>
          {
            matchData.teams.map((item, i) => (
              <div key={i} className={teamSelect === i ? styles.teamContainerSelected : styles.teamContainer}>
                <h3>Team : {item.teamName} <span onClick={() => handelteamSelect(i)}>select</span></h3>
                <div className={styles.playerlistContainer}>
                  {
                    item.players.map((player, j) => (
                      <div key={j} className={styles.playerNameContainer}>
                        <p>{player.name}</p>
                        <div><HiMinus className={styles.playerIcon} /></div>
                        <div><FaPlus className={styles.playerIcon} /></div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
      ):(
        <div>loadding.....</div>
      )
    }
    </>
  )
}

export default HostingPage





