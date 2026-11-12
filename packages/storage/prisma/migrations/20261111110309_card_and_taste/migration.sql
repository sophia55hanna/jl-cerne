-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Taste" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isMandatory" BOOLEAN NOT NULL DEFAULT false,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "value" TEXT NOT NULL DEFAULT '',
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "Taste_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_username_key" ON "Card"("username");

-- AddForeignKey
ALTER TABLE "Taste" ADD CONSTRAINT "Taste_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
