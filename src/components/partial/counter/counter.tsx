import '../../../App.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { COUNTDOWN_COLOR_1, COUNTDOWN_COLOR_2, COUNTDOWN_COLOR_3, COUNTDOWN_COLOR_4 } from '../../../constants/colorMapping';
import axios from 'axios';
import { API_URLS, INTERVALE_SIZE_S } from '../../../constants/apiMapping';

type CounterProps = {
  intervalSize: number;
  isPlaying: boolean;
};
function Counter({ intervalSize, isPlaying }: CounterProps) {
  const [status, setStatus] = useState<boolean | null>(false);
  const [lastCheckTimeStamp, setLastCheckTimeStamp] = useState("");

  const formattedTime = moment(lastCheckTimeStamp).calendar();

  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [lastCheckTimeStamp]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      const fetchData = () => {
        axios.get(API_URLS.Ping)
          .then(response => {
            setStatus(response.data === true);
            setLastCheckTimeStamp(new Date().toISOString());
          })
          .catch(error => {
            console.error('Error fetching status:', error);
            setLastCheckTimeStamp(new Date().toISOString());
            setStatus(null);
          });
      };

      fetchData();

      interval = setInterval(fetchData, intervalSize);
    } else {
      clearInterval(intervalSize);
      setKey(prevKey => prevKey + 1); 
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, intervalSize]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {status === true ? <p>Alive 🌟</p> : status === false ? <p>Dead ☠️</p> : <p>Oops</p>}
      <div style={{ fontSize: "24px", fontWeight: "bold", animation: "pulse 1s infinite" }}>{formattedTime}</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={INTERVALE_SIZE_S}
          colors={[COUNTDOWN_COLOR_1, COUNTDOWN_COLOR_2, COUNTDOWN_COLOR_3, COUNTDOWN_COLOR_4]}
          colorsTime={[10, 6, 3, 0]}

        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Counter;
