import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    lunch: string;
};

const todayLunch = [
    "치킨마요",
    "참치마요",
    "스팸마요",
    "제육 도시락",
    "불고기 도시락",
    "고기고기 도시락",
    "돈까스 도련님 도시락",
    "김치볶음밥",
    "돈까스 덮밥",
    "카레 도시락",
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const lunch = todayLunch[Math.floor(Math.random() * todayLunch.length)];
    res.status(200).json({ lunch });
}
