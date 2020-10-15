alter table "public"."books" add foreign key ("id") references "public"."reviews"("rating_id") on update no action on delete no action;
