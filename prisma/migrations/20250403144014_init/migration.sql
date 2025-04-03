-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contrat" (
    "id" TEXT NOT NULL,
    "nomEntreprise" TEXT NOT NULL,
    "typeEntreprise" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "propriétaire" TEXT NOT NULL,
    "téléphone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statut" TEXT NOT NULL,

    CONSTRAINT "contrat_pkey" PRIMARY KEY ("id")
);
