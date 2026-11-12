import 'dotenv/config'
import { Prisma, prisma } from '@puc/storage';

const Tastes = [
    { title: 'cinematicWork' },
    { title: 'televisionWork' },
    { title: 'literaryWork' },
    { title: 'comicBook' },
    { title: 'videoGame' },
    { title: 'playedSport' },
    { title: 'watchedSport' },
    { title: 'supporting' },
    { title: 'musicalGenre' },
    { title: 'musicalArtist' },
    { title: 'instrument' },
    { title: 'personality' },
    { title: 'dreamProfession' },
    { title: 'food' },
    { title: 'color' },
    { title: 'religion' },
    { title: 'politicalIdeology' },
    { title: 'dreamCountry' },
    { title: 'birthdate' },
    { title: 'number' },
    { title: 'realCountry', isMandatory: true },
    { title: 'name', isMandatory: true }
]

export default async function main(): Promise<void> {
    const cards = await prisma.card.findMany({
        select: { id: true }
    })

    const pastTastes = await prisma.taste.findMany({
        select: { id: true, title: true, cardId: true }
    })

    const futureTastes: Prisma.TasteCreateManyInput[] = []

    const seeding = cards.map((card) => {
        Tastes.map((fTaste) => (
            pastTastes.some((pTaste) => pTaste.cardId === card.id && pTaste.title === fTaste.title) === true
            ? null
            : futureTastes.push({
                ...fTaste,
                cardId: card.id
            })
        ))

        return prisma.taste.createMany({
            data: futureTastes
        })
    })

    await prisma.$transaction(seeding)

    console.log('Database seeded successfully.');
}

main().catch((error: unknown) => {
    console.error('Error during seeding:', error)

    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect();
})