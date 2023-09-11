export type Picture =
	| unknown
	| {
			sources: {
				avif: [
					{
						src: string;
						w: number;
					}
				];
				webp: [
					{
						src: string;
						w: number;
					}
				];
			};
			img: {
				src: string;
				w: number;
				h: number;
			};
	  };
