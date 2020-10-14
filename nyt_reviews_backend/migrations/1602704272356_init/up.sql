CREATE TABLE public.books (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    title text NOT NULL,
    author text NOT NULL,
    summary text,
    publisher text NOT NULL,
    image_url text
);
CREATE TABLE public.reviews (
    rating integer NOT NULL,
    rating_id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    review_text text NOT NULL
);
CREATE TABLE public.users (
    name text NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (rating_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_id_fkey FOREIGN KEY (id) REFERENCES public.reviews(rating_id) ON UPDATE RESTRICT;
ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_rating_id_fkey FOREIGN KEY (rating_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_fkey FOREIGN KEY (id) REFERENCES public.reviews(rating_id) ON UPDATE RESTRICT;
