import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export const AsideContainer = styled.aside`
	z-index: 2;
	position: fixed;
	left: 0;
	top: 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 100vh;
	width: 6.5rem;

	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	background-color: ${(props) => props.theme.color.sidebar.bg};

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& > * {
			display: flex;
			align-items: center;
			justify-content: center;

			padding: 2rem 0;
			cursor: pointer;
			width: 100%;

			&:nth-child(1) {
				border-bottom: 0.3px solid rgba(248, 248, 251, 0.2);
			}
		}
	}
`;

export const Logo = styled.div`
	height: 6.5rem;
	background-color: ${(props) => props.theme.color.main};

	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;

	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 1;

		height: 50%;
		width: 100%;

		background-color: #9277ff;

		border-top-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}

	img {
		position: relative;
		z-index: 2;
	}
`;

export const Avatar = styled(Image)`
	border-radius: 50%;
`;

export const DialogInfo = styled(motion.div)`
	transform: translate(0);
	position: fixed;
	z-index: 3;
	inset: 0;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DialogBackground = styled.div`
	position: absolute;
	z-index: 3;
	inset: 0;

	background: rgba(0, 0, 0, 0.7);
	backdrop-filter: blur(5px);
`;
export const DialogContent = styled.div`
	z-index: 4;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1.5rem;

	max-width: 20rem;

	color: white;

	strong {
		font-weight: 400;
		font-size: 2.2rem;
	}
	a {
		text-decoration: none;
		font-size: 1.1rem;
		color: white;

		position: relative;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			bottom: -10px;

			height: 2px;
			width: 0%;

			background-color: ${(props) => props.theme.color.main};

			border-radius: 3px;
			transition: all 0.7s ease;
		}
		&:hover::before {
			width: 100%;
		}
	}
`;
