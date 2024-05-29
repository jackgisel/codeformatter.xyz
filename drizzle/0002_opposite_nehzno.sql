ALTER TABLE `actions` ADD `name` text;--> statement-breakpoint
ALTER TABLE `actions` DROP COLUMN `title`;--> statement-breakpoint
ALTER TABLE `actions` DROP COLUMN `prompt`;--> statement-breakpoint
ALTER TABLE `actions` DROP COLUMN `created_at`;