interface ResultType {
  info: ResultInfo;
  results: ResultData[];
}

interface ResultInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

interface ResultData {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Origin;
  name: string;
  origin: Origin;
  species: string;
  status: string;
  type: string;
  url: string;
}

interface Origin {
  name: string;
  url: string;
}
