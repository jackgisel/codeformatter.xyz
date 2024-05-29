CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
ALTER TABLE `actions` ADD `title` text;--> statement-breakpoint
ALTER TABLE `actions` ADD `prompt` text;--> statement-breakpoint
ALTER TABLE `actions` ADD `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL;--> statement-breakpoint
ALTER TABLE `actions` DROP COLUMN `name`;