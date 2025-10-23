import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface SurahData {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  ayahs: Ayah[];
}

interface SurahResponse {
  data: SurahData;
}

const fetchSurah = async (surahNumber: string): Promise<SurahData> => {
  const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
  if (!response.ok) {
    throw new Error("Failed to fetch surah");
  }
  const data: SurahResponse = await response.json();
  return data.data;
};

const SurahDetail = () => {
  const { surahNumber } = useParams<{ surahNumber: string }>();

  const { data: surah, isLoading, error } = useQuery({
    queryKey: ["surah", surahNumber],
    queryFn: () => fetchSurah(surahNumber!),
    enabled: !!surahNumber,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Surahs
          </Button>
        </Link>
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center">
          <p>Failed to load surah. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!surah) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Surahs
        </Button>
      </Link>

      <Card className="mb-6">
        <CardHeader className="text-center">
          <div className="mb-4">
            <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">
              {surah.number}
            </div>
            <CardTitle className="text-4xl mb-2 font-arabic">
              {surah.name}
            </CardTitle>
            <p className="text-2xl font-semibold text-gray-700">{surah.englishName}</p>
            <p className="text-gray-600 mt-2">{surah.englishNameTranslation}</p>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-4 border-t">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{surah.numberOfAyahs} Ayahs</span>
            </div>
            <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
              {surah.revelationType}
            </div>
          </div>
        </CardHeader>
      </Card>

      {surah.number !== 1 && surah.number !== 9 && (
        <div className="text-center mb-6">
          <p className="text-3xl font-arabic text-primary">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-sm text-gray-600 mt-2">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>
      )}

      <div className="space-y-6">
        {surah.ayahs.map((ayah) => (
          <Card key={ayah.number} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {ayah.numberInSurah}
                </div>
                <div className="flex-1">
                  <p className="text-2xl leading-loose font-arabic text-right mb-4" dir="rtl">
                    {ayah.text}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SurahDetail;
