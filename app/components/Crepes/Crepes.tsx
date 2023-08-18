import { getCrepes } from "../Home/helpers/fetch";
import Crepe from "./Crepe";

export default async function Crepes() {
	const crepes = await getCrepes();

	return (
		<div className="flex flex-wrap gap-4 justify-center my-4 max-h-full overflow-scroll">
			{crepes.map((crepe) => (
				<Crepe {...crepe} key={crepe.id} />
			))}
		</div>
	);
}
