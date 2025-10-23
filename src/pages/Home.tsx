import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BookOpen, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface SurahListResponse {
  data: Surah[];
}

const fetchSurahs = async (): Promise<Surah[]> => {
  const response = await fetch("https://api.alquran.cloud/v1/surah");
  if (!response.ok) {
    throw new Error("Failed to fetch surahs");
  }
  const data: SurahListResponse = await response.json();
  return data.data;
};

const Home = () => {
  const { data: surahs, isLoading, error } = useQuery({
    queryKey: ["surahs"],
    queryFn: fetchSurahs,
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          القرآن الكريم
        </h1>
        <p className="text-xl text-gray-600">The Noble Qur'an</p>
        <p className="text-gray-500 mt-2">Read and reflect upon the words of Allah</p>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center">
          <p>Failed to load surahs. Please try again later.</p>
        </div>
      )}

      {surahs && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {surahs.map((surah) => (
            <Link key={surah.number} to={`/surah/${surah.number}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 font-arabic">
                        {surah.name}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-gray-700">
                        {surah.englishName}
                      </CardDescription>
                      <CardDescription className="text-sm">
                        {surah.englishNameTranslation}
                      </CardDescription>
                    </div>
                    <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {surah.number}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{surah.numberOfAyahs} Ayahs</span>
                    </div>
                    <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                      {surah.revelationType}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
