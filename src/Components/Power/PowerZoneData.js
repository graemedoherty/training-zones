import React from 'react';
import PowerZoneCalculator from './PowerZoneCalculator';
import './Power.css';
import '../../App.css';

const PowerZoneData = () => {
  return (
    <>
      <div className='content-main'>
        <div className='section-left'>
          <h1>Power Zone Calculator</h1>
          <div>
            <h2>What is Power Zone training?</h2>
            <p>
              Power zone training in running is a structured approach to
              training that categorizes different intensities of effort into
              specific zones based on physiological thresholds such as heart
              rate, pace, or perceived exertion. The concept is similar to other
              training methodologies like heart rate zone training or pace-based
              training, but it specifically focuses on power output.
            </p>
            <h2>Benefits of Power Zone Training</h2>
            <ol>
              <li>
                Precision: Power is a direct measure of effort, making it more
                precise than heart rate or perceived exertion.
              </li>
              <li>
                Consistency: Unlike heart rate, which can be affected by
                external factors (e.g., temperature, hydration), power remains
                consistent.
              </li>
              <li>
                Adaptability: Power zones can be adjusted as the runner's
                fitness improves.
              </li>
            </ol>
            <h2>How to Work Out Training Zones Using FTP</h2>

            <p>
              FTP(Functional Threshold Power) is the highest average power you
              can sustain for about an hour. It is a critical metric for
              establishing power zones.
            </p>

            <h2>There are several methods to estimate your FTP:</h2>
            <ol>
              <li>
                <a
                  href='https://www.youtube.com/watch?v=IT_Qk9ipMYk&ab_channel=GlobalTriathlonNetwork'
                  className='links'
                >
                  20-Minute Test:
                </a>{' '}
                Perform a 20-minute all-out time trial. Your average power
                during this period is about 95% of your FTP.
              </li>
              <li>
                Ramp Test: Perform a test where you gradually increase your
                power output until you cannot continue. FTP is estimated from
                the power you sustained.
              </li>
              <li>
                Race-Based: Use data from a race where you sustained high effort
                for around an hour.
              </li>
            </ol>
          </div>
          <div></div>
        </div>
        <div className='section-right'>
          <p>
            First, establish your FTP. This is typically done through a test
            where you measure the highest power you can sustain for an hour.
            Power zones are then calculated as percentages of your FTP. The
            exact percentages and number of zones can vary slightly depending on
            the system or training philosophy, but a common approach is to use
            the following
          </p>
          <p>
            <strong>7 Zones Model</strong>:
          </p>
          <ul>
            <li>
              <b>Zone 1</b> (Active Recovery): 0 - 55% of FTP
            </li>
            <li>
              <b>Zone 2</b> (Endurance): 56 - 75% of FTP
            </li>
            <li>
              <b>Zone 3</b> (Tempo): 76 - 90% of FTP
            </li>
            <li>
              <b>Zone 4</b> (Threshold): 91 - 105% of FTP
            </li>
            <li>
              <b>Zone 5</b> (VO2 Max): 106 - 120% of FTP
            </li>
            <li>
              <b>Zone 6</b> (Anaerobic Capacity): 121 - 150% of FTP
            </li>
            <li>
              <b>Zone 7</b> (Neuromuscular Power): 150% of FTP
            </li>
          </ul>
          <div className='table-container'>
            <PowerZoneCalculator />
          </div>
        </div>
      </div>
      <div className='section-bottom'>
        <h2>Zone 1 (&lt;54% FTP)</h2>
        <p>
          Zone 1 is considered low-intensity exercise, though it’s not limited
          to recovery or walking, according to Jim Vance. With a solid aerobic
          base, runners should find it comfortable to stay within this zone.
        </p>

        <h2>Zone 2 (55–74% FTP)</h2>
        <p>
          Zone 2 focuses on developing aerobic endurance. Based on experience
          with ultra and trail runners, the lower limit of this range is often
          set slightly lower to accommodate the significant heart rate increase
          after prolonged exercise. In long efforts or due to the common
          undervaluation of power outputs during trail running, running above
          80% power output might align more closely with the physiological
          demands of Zone 3.
        </p>

        <h2>Zone 3 (75–89% FTP)</h2>
        <p>
          Zone 3, often referred to as “tempo,” represents exercise at the
          physiological lactate threshold 1 (LT1). LT1, which is sometimes
          confused with the lactate turn point (LTP) or the onset of blood
          lactate accumulation (OBLA), is where lactate levels first increase
          above baseline, typically reaching 1-2 mM. This is crucial for
          marathon and ultramarathon runners, as there is a strong correlation
          between LT1 and performance in long-duration events. Aligning with
          Vance, Zone 3 is capped at 94% to keep training below LT2. Others,
          like Stryd and Steve Paladino, extend Zone 3 up to 100-101% of
          critical power, which can involve significant anaerobic work,
          especially in efforts exceeding 10 minutes. Paladino further divides
          Zone 3 into 3a and 3b to ensure efforts stay below 95% of critical
          power, usually the upper limit for marathon power. This underscores
          the importance of choosing a zone system that fits one’s training
          philosophy.
        </p>

        <h2>Zone 4 (90–104% FTP) and Zone 5 (101–106% critical power)</h2>
        <p>
          Zone 4, which encompasses the anaerobic threshold, can be challenging
          as athletes often aim for the upper end of this zone, especially
          during interval training. Since Zone 4 is primarily used for
          intervals, a range that includes both above and below 100% critical
          power, like those from Vance and Stryd, can result in varying training
          stimuli depending on where the effort falls within the zone.
          Therefore, it is common to use separate zones for sub-threshold (Zone
          4, 95–100%) and supra-threshold (Zone 5, 101–106%) efforts. Zone 4
          generally corresponds to half-marathon race intensity, while Zone 5
          aligns with 10 km race intensity.
        </p>

        <h2>Zone 6 (105–120% FTP)</h2>
        <p>
          Zone 6, known as the VO2max zone, is used for prescribing short
          intervals (&lt;5 minutes) and is associated with 3000–5000 m
          performance. This zone needs to cover a broad range of power values
          because an athlete’s running economy and anaerobic capacity
          significantly impact their ability to sustain power over 1–5 minutes.
        </p>

        <h2>Zone 7 (151%+ FTP)</h2>
        <p>
          Zone 7 is for prescribing short and long sprint efforts (&lt;2
          minutes), where athletes typically rely on perceived effort rather
          than strict power outputs. It is effective to prescribe 200-400m lap
          times on the track, allowing the number of repetitions and interval
          duration to guide effort levels. Given the intense nature of these
          intervals, athletes naturally gauge their effort, contrasting with
          Zones 5 and below where initial physiological stress does not always
          match perceived effort, necessitating a more fixed approach.
        </p>
      </div>
    </>
  );
};

export default PowerZoneData;
