import styled from 'styled-components'

import CustomCard from './../components/common/Card'

const HeroStyles = styled.section`
	min-height: 100vh;
	background: url('/images/hero.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	padding: 6rem;
	@media (min-width: 10px) and (max-width: 767px) {
		width: 77.1rem;
	}
`

const Main = styled.section`
	@media (min-width: 10px) and (max-width: 767px) {
		text-align: center;
		width: 76rem;
	}
`
const BenefitsStyles = styled.section`
	min-height: 100vh;
	padding: 3rem;
	background: #fff;
`

const IntroVideoStyles = styled.section`
	padding: 3rem;
	min-height: 40vh;
	background: #606060;
`

const ULStyles = styled.ul`
	direction: rtl;
	text-align: right;
`

const ClientStyles = styled.section`
	min-height: 100vh;
	padding: 3rem;
	background: #f2f2f2;
`


function HomePage() {
	return (
		<Main>
			<HeroStyles>
				<div className="container">
					<div className="row">
						<div className="col-md-3 p-4 mx-auto">
							<img src="/images/logo.png" alt="Lead Generation" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-8  mx-auto text-center">
							<h3 className="text-white">
								!به راحتی خدمات مورد نیاز خودت رو پیدا کن
							</h3>
							<p className="mt-1 text-white">
								اینجا می توانید کمی در مورد خودتون صحبت و توضیح دهید که محصول
								شما چیست و چه کارهایی انجام می ده
							</p>
						</div>
					</div>
				</div>
			</HeroStyles>

			<BenefitsStyles>
				<div className="container">
					<div className="row">
						<div className="col-md-8 mx-auto text-center">
							<h3 className="text-dark">
								ما خدمات زیادی به مشتریان بزرگمان ارائه می دهیم
							</h3>
							<p className="mt-2 text-muted mb-4">
								از این زیر عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با
								محصول و خدمات خود استفاده می کنیم. با کلیک بر روی این قسمت می
								توانید متن خود را ویرایش کنید
							</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-xs-12">
							<CustomCard title="طراحی جدید" imageUrl="/images/p1.jpg">
								اینجا می توانید کمی در مورد خودتون صحبت و توضیح دهید که چه
								خدماتی ارائه می دهید
							</CustomCard>
						</div>
						<div className="col-md-4 col-xs-12">
							<CustomCard title="خدمات مالی" imageUrl="/images/p2.jpg">
								اینجا می توانید کمی در مورد خودتون صحبت و توضیح دهید که چه
								خدماتی ارائه می دهید
							</CustomCard>
						</div>
						<div className="col-md-4 col-xs-12">
							<CustomCard title="تجزیه و تحلیل وب" imageUrl="/images/p3.jpg">
								اینجا می توانید کمی در مورد خودتون صحبت و توضیح دهید که چه
								خدماتی ارائه می دهید
							</CustomCard>
						</div>
					</div>
				</div>
			</BenefitsStyles>

			<IntroVideoStyles>
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<h4 className="text-white text-right">
								ویدئو معرفی ما را تماشا کنید
							</h4>
							<ULStyles>
								<li className="p-2 text-white">
									<p>
										این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را
										کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده
										قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.
									</p>
								</li>
								<li className="p-2 text-white">
									<p>
										این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را
										کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده
										قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.
									</p>
								</li>
							</ULStyles>
						</div>

						<div className="col-md-4">
							<img
								src="/images/intro-video.png"
								alt="Intro Video"
								className="rounded float-left w-100"
							/>
						</div>
					</div>
				</div>
			</IntroVideoStyles>
			<ClientStyles>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="text-center">مشتریان ما در موردمان چه می‌گویند</h3>
							<p className="text-muted text-center">
								از این زیر‌عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با
								محصول و خدمات خود استفاده می‌کنیم. با کلیک بر روی این قسمت
								می‌توانید متن خود را ویرایش کنید
							</p>
						</div>
					</div>
				</div>

				<div className="container mt-3">
					<div className="row">
						<div className="col-6">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-md-10 pr-5">
											<div className="text-right">
												<p>
													این یک پاراگراف است. برای افزودن یا ویرایش متن خود
													اینجا را کلیک کنید. این متن باید برای گفتن یک داستان
													مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست
													آورند.
												</p>
												<p>علی جوانمردی</p>
												<small>عنوان شغل، اسم شرکت</small>
											</div>
										</div>
										<div className="col-md-2">
											<img
												src="/images/profile.png"
												alt="Profile"
												className="rounded float-right "
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-6">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-md-10 pr-5">
											<div className="text-right">
												<p>
													این یک پاراگراف است. برای افزودن یا ویرایش متن خود
													اینجا را کلیک کنید. این متن باید برای گفتن یک داستان
													مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست
													آورند.
												</p>
												<p>علی جوانمردی</p>
												<small>عنوان شغل، اسم شرکت</small>
											</div>
										</div>
										<div className="col-md-2">
											<img
												src="/images/profile.png"
												alt="Profile"
												className="rounded float-right"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container p-5">
					<div className="row">
						<div className="col-md-8 mx-auto text-center">
							<img src="/images/clients.png" alt="Clients" />
						</div>
					</div>
				</div>
			</ClientStyles>
		</Main>
	)
}

export default HomePage
