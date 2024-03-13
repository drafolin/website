import MD5 from "crypto-js/md5";

export const Component = ({ size }: { size: number }) => {
	const mailHash = MD5("derg@drafolin.ch".trim().toLowerCase()).toString();

	return <img
			src={`https://www.gravatar.com/avatar/${mailHash}?s=${size}`}
			alt="My pfp."
		/>
}

export default Component;
