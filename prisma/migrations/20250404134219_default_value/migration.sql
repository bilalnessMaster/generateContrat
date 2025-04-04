-- AlterTable
ALTER TABLE "contrat" ALTER COLUMN "statut" DROP NOT NULL,
ALTER COLUMN "statut" SET DEFAULT 'à contacter';
