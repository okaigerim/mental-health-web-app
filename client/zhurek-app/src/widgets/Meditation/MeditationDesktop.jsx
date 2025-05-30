import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import MeditationStats from '../../features/Meditation/MeditationScores';
import MeditationDonutChart from '../../features/Meditation/MeditationDonutChart';
import MeditationScoreList from '../../features/Meditation/MeditationScoreList';
import MeditationHistory from '../../features/Meditation/MeditationHistory';
import MeditationRecommendations from '../../features/Meditation/Recommendations';
import MeditationStepperModal from '../../features/Meditation/MeditationStepper';

export const MeditationDesktop = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#FAF7F4]">
      <div className="w-full flex flex-row justify-between gap-x-5">
        <div className="w-[80%] p-10">
          <div className="flex flex-row w-full justify-between mb-10">
            <div className="">
              <h2 className="mb-5 text-4xl font-bold text-[#4F3422]">{t('meditation')}</h2>
            </div>
            <div className="">
              <button
                className="bg-[#91AD75] px-3 py-2 text-xl font-bold rounded-full text-white"
                onClick={() => { setOpen(true) }}
              >
                {t('startMeditation')}
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-10 justify-between gap-x-10">
            <div className="w-full mb-10">
              <h2 className="mb-5 text-xl font-bold text-[#4F3422]">{t('todaysStatistics')}</h2>
              <div className="flex flex-row  gap-x-10">
                <div className='w-1/3'>
                  <MeditationDonutChart />
                </div>
                <div className="w-1/2">
                  <MeditationScoreList />
                </div>
              </div>
            </div>
            <div className="w-full">
              <MeditationRecommendations />
            </div>
          </div>
          <div className="w-full">
            <MeditationHistory />
          </div>
        </div>
        <div className="w-[20%] h-full">
          <MeditationStats />
        </div>
      </div>
      {open && <MeditationStepperModal onClose={() => { setOpen(false) }} />}
    </div>
  )
}
