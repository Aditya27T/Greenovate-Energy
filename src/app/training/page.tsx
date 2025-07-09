import BannerSection from '@/components/training/BannerSection';
import TrainingListSection from '@/components/training/TrainingListSection';
import { trainingData } from '@/data/training'; 

const TrainingPage = () => {
  return (
    <>
      <BannerSection title="Program Pelatihan" />
      <TrainingListSection trainings={trainingData} />
    </>
  );
};

export default TrainingPage;