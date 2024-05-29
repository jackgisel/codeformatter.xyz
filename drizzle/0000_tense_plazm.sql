CREATE TABLE `actions` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text,
	`prompt` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
