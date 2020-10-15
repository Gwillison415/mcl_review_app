alter table "public"."books" drop constraint "books_id_fkey",
             add constraint "books_id_fkey"
             foreign key ("id")
             references "public"."reviews"
             ("rating_id") on update no action on delete no action;
