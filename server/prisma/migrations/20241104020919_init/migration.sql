/*
  Warnings:

  - The `startDate` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dueDate` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `projectManagementUserId` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attachment" ALTER COLUMN "fileName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "status" TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "priority" DROP NOT NULL,
ALTER COLUMN "tags" DROP NOT NULL,
DROP COLUMN "startDate",
ADD COLUMN     "startDate" TIMESTAMP(3),
DROP COLUMN "dueDate",
ADD COLUMN     "dueDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "projectManagementUserId",
ADD COLUMN     "projectManagerUserId" INTEGER;
