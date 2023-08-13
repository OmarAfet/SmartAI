import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="container px-16 mx-auto">
				<div className="flex flex-col">
					<div className="flex lg:flex-row flex-col justify-center items-center py-32 gap-32">
						<div className="flex justify-end items-center">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="228.18859212313262 202.06382978723406 93.62281575373473 65.87234042553189" className="lg:w-96 lg:h-96 w-52 h-52">
								<path d="M266.49733,202.06383h-7.66175l-30.64699,65.87234h17.28565l17.19221,-39.99058l17.19221,39.99058h17.28565z" className="fill-gray-700"></path>
								<path d="M321.81141,202.06383h-16.6316v65.87234h16.6316z" className="fill-gray-700"></path>
							</svg>
						</div>
						<div>
							<div className="lg:text-8xl text-6xl font-bold">SmartAI</div>
						</div>
					</div>
					<div className="text-center lg:text-6xl text-3xl">SmartAI مكان حيث يزدهر فيه الابداع</div>
					<Link to="/SmartAI/DoctorGPT" className="btn text-4xl mt-32">
						جرب DoctorGPT
					</Link>
				</div>
				<hr className="mt-32" />
				<div className="flex flex-col justify-center text-center items-center xl:grid xl:grid-cols-3 py-32">
					<div className="flex justify-start items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="xl:w-72 xl:h-72 w-52 h-52">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
						</svg>
					</div>
					<div className="col-span-2">
						<div className="lg:text-8xl text-6xl font-bold pb-16">رسالتنا</div>
						<div className="text-xl">مواكبة رؤية 2030 وتحول القطاع الصحي لضمان استمرار تطوير خدمات الرعاية الصحية في المملكة وتركيز الجهود في هذا القطاع الهام.</div>
					</div>
				</div>
				<div className="flex flex-col justify-center text-center items-center xl:grid xl:grid-cols-3 py-32">
					<div className="flex justify-start items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="xl:w-72 xl:h-72 w-52 h-52">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
						</svg>
					</div>
					<div className="col-span-2">
						<div className="lg:text-8xl text-6xl font-bold pb-16">مشكلتنا</div>
						<div className="text-xl">مع تطور القطاع الصحي أصبحت التقنية هي أساس كل منظمة صحية ولكن مع تأخر المستشفيات في التحول الصحي اصبحوا الناس يجهلون في كيفية استعمال التطبيقات الصحية وكيفية استغلالها لعلاجهم بأفضل طريقة ممكنة عن طريق المنزل.</div>
					</div>
				</div>
				<div className="flex flex-col justify-center text-center items-center xl:grid xl:grid-cols-3 py-32">
					<div className="flex justify-start items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="xl:w-72 xl:h-72 w-52 h-52">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
						</svg>
					</div>
					<div className="col-span-2">
						<div className="lg:text-8xl text-6xl font-bold pb-16">قصتنا</div>
						<div className="text-xl">محمد مصاب بالقولون اصبح محمد يومياً يبحث عن الاعراض التي تصيبه في اليوم الواحد عن طريق قوقل لكن محمد هنا لايوجد لديه أي وعي في كيفية استخدام الانترنت فيقوم بتصديق أي كلام يبحث عنه لدرجة أنه يوهم بنفسه بأنه مصاب بالسرطان.</div>
					</div>
				</div>
				<div className="flex flex-col justify-center text-center items-center xl:grid xl:grid-cols-3 py-32">
					<div className="flex justify-start items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="xl:w-72 xl:h-72 w-52 h-52">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
						</svg>
					</div>
					<div className="col-span-2">
						<div className="lg:text-8xl text-6xl font-bold pb-16">فكرتنا</div>
						<div className="text-xl">تطبيق مماثل للـ ChatGPT باللغة العربية ومخصص لتقييم وتشخيص حالة المريض وهُنا الـ AI يقوم بوضع الاسئلة المناسبة لحالة الشخص الذي يكلمه إلى أن يفهم حالة الشخص ويقوم بإعطائه النصائح أو تصوير الحالة ويقوم المريض بإرسالها لتفسير المرض عن طريق الـ AI.</div>
					</div>
				</div>
				<div className="flex flex-col justify-center">
					<div className="lg:text-8xl text-6xl font-bold text-center pb-8">اهدافنا</div>
					<div className="flex flex-wrap justify-center gap-4">
						<div className="bg-gray-200 flex gap-4 p-4 rounded-lg hover:shadow-lg cursor-default">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
							</svg>
							<div className="flex-1">تحويل النص الى صور توضيحية والعكس.</div>
						</div>
						<div className="bg-gray-200 flex gap-4 p-4 rounded-lg hover:shadow-lg cursor-default">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
							</svg>
							<div className="flex-1">يكتشف ما اذا كانت الأعراض غريبة ويقوم بإعطاء الشخص أي انذار للذهاب الى المستشفى.</div>
						</div>
						<div className="bg-gray-200 flex gap-4 p-4 rounded-lg hover:shadow-lg cursor-default">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
							</svg>
							<div className="flex-1">يقوم بقراءة أي تحاليل من المختبر بلغة مفهومة لإفادة المريض.</div>
						</div>
						<div className="bg-gray-200 flex gap-4 p-4 rounded-lg hover:shadow-lg cursor-default">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
							</svg>
							<div className="flex-1">يقوم بمناقشة المرضى عن أي دواء أو تشخيص لإفادتهم.</div>
						</div>
						<div className="bg-gray-200 flex gap-4 p-4 rounded-lg hover:shadow-lg cursor-default">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
							</svg>
							<div className="flex-1">تذكير المرضى بأخذ الدواء بنظام الـ Alert.</div>
						</div>
					</div>
					<div className="flex flex-col text-center py-32">
						<div className="lg:text-8xl text-6xl font-bold pb-16">طموحنا</div>
						<div className="lg:text-3xl text-xl">يكون تطبيقنا مربوط مع تطبيق صحتي لخدمة جميع المرضى بجميع الفئات العمرية.</div>
					</div>
					<div className="flex flex-col text-center pb-32">
						<div className="lg:text-8xl text-6xl font-bold pb-16 pt-32">اعضاء الفريق</div>
						<div className="grid grid-cols-1 gap-4">
							<a target="_blank" href="https://profile.satr.codes/omarafet/public/overview" className="bg-gray-200 p-4 rounded-lg hover:shadow-lg cursor-pointer">
								<div className="flex">
									<div className="flex text-2xl font-bold flex-1 mb-4">عمر العنزي</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 1024 1024">
											<path d="M896 708.757333v101.866667A106.538667 106.538667 0 0 1 789.418667 917.333333H234.581333A106.581333 106.581333 0 0 1 128 810.624v-101.866667l-82.858667-367.573333c-14.4-75.178667 47.317333-113.344 107.392-68.48l157.504 117.717333c7.722667 5.76 13.888 4.309333 18.133334-4.117333l116.394666-231.957333c31.914667-63.594667 102.976-63.530667 134.848 0l116.416 231.957333c4.266667 8.448 10.389333 9.877333 18.133334 4.117333l157.504-117.717333c60.074667-44.885333 121.813333-6.784 107.392 68.48L896 708.736zM204.8 661.333333h614.4l65.92-292.309333-120.106667 89.749333c-50.197333 37.525333-117.333333 21.824-145.450666-34.197333L512 210.24l-107.584 214.336c-28.074667 55.957333-95.232 71.722667-145.450667 34.197333l-120.064-89.728L204.778667 661.333333z m8.533333 149.290667A21.248 21.248 0 0 0 234.581333 832h554.837334A21.205333 21.205333 0 0 0 810.666667 810.624V746.666667H213.333333v63.957333z" fill="currentColor" />
										</svg>
									</div>
								</div>
								<div className="flex text-start">قائد الفريق والمطور الرئيسي لـ SmartAI. وهو مهندس برمجيات حر لديه أكثر من 5 سنوات من الخبرة في تطوير وتصميم التطبيقات الذكية. مبدع وشغوف بالتكنولوجيا، ويؤمن بإمكانية استخدام الذكاء الاصطناعي لتحسين حياة الناس.</div>
							</a>
							<div className="bg-gray-200 p-4 rounded-lg hover:shadow-lg cursor-pointer">
								<div className="flex">
									<div className="flex text-2xl font-bold flex-1 mb-4">شهد المطرفي</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
										</svg>
									</div>
								</div>
								<div className="flex text-start">صاحبة فكرة تطبيق DoctorGPT. لديها اهتمام كبير بتطوير تطبيقات الذكاء الاصطناعي في مجال الرعاية الصحية. وهي ملتزمة بتطوير تطبيق DoctorGPT ليكون أداة قيمة للمرضى.</div>
							</div>
							<div className="bg-gray-200 p-4 rounded-lg hover:shadow-lg cursor-pointer">
								<div className="flex">
									<div className="flex text-2xl font-bold flex-1 mb-4">مريم الفقيهي</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
										</svg>
									</div>
								</div>
								<div className="flex text-start">مسؤولة عن إنشاء الفيديوهات التي تشرح تطبيق DoctorGPT. وهي مصممه فيديوهات موهوبة ولديها خبرة في إنتاج فيديوهات إبداعية عالية الجودة.</div>
							</div>
							<div className="bg-gray-200 p-4 rounded-lg hover:shadow-lg cursor-pointer">
								<div className="flex">
									<div className="flex text-2xl font-bold flex-1 mb-4">سجا الامير</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
										</svg>
									</div>
								</div>
								<div className="flex text-start">مسؤولة عن البرزنتيشن لـ DoctorGPT. لديها خبرة في تقديم البرزنتيشن الرائعة. ولديها شغف بمشاركة أفكارها مع العالم.، وهي ملتزمة بمشاركة قصة SmartAI مع أكبر عدد ممكن من الناس.</div>
							</div>
							<div className="bg-gray-200 p-4 rounded-lg hover:shadow-lg cursor-pointer">
								<div className="flex">
									<div className="flex text-2xl font-bold flex-1 mb-4">أمجاد المطيري</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
										</svg>
									</div>
								</div>
								<div className="flex text-start">مسؤولة عن تقديم العروض التقديمية لتطبيق DoctorGPT. وهي شخص متمكن من التواصل، ولديها قدرة رائعة على إقناع الآخرين, ملتزمة بجعل SmartAI اسماً معروفاً في مجال الذكاء الاصطناعي.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
