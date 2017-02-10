<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package marctheme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<?php
			while ( have_posts() ) : the_post(); ?>
				<section class="page-title container-fluid">
					<div class="container">
						<h1 class="page-title__title">Access Conflict Monitor <span class="page-title__short-title">(ACM)</span></h1>
						<div><img class="page-title__image" src="<?php echo get_template_directory_uri(); ?>/img/illustrations/acm.svg" alt="acm illustration" /></div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Online Risk Analysis</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="radar">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_aim.png" alt="radar icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>
										<ul>
											<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>
											<li>Prepare SoD, Critical access reports at User and Role level and publish</li>
											<li>Reports are generated at blazing speed and stored in database and can be reviewed at later stages.</li>
											<li>Facilitate to run the access check at function level and SoD level, no separate risks to be defined in order to run at function level.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Simulation</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="user">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_simulation.png" alt="user icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Perform risk analysis simulation before applying changes on user authorizations</p>
										<ul>
											<li>Select users and roles to be added, perform simulation to know future potential conflicts.</li>
											<li>Avoid introducing new SoD risk in SAP system by performing risk simulation</li>
											<li>Works as a preventive control.</li>
											<li>Possible to perform mass risk simulations.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Cross System Analysis</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="network">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_csa.png" alt="network icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Perform the risk analysis to view the user risk spread across the systems.
											Example : Shopping Cart Create (SRM) / PO Approval (ECC)</p>
										<ul>
											<li>Authorizations are distributed to several systems, example R/3 & SRM</li>
											<li>ACM helps to find the risks associated a user ID that spread across systems.</li>
											<li>Very few applications in the market are able to report the cross system analysis.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Org Level Analysis</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="planet">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_ola.png" alt="planet icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Perform Risk Analysis on Organizational Level.</p>
										<ul>
											<li>Organizational rule analysis can be enabled to avoid false positives.</li>
											<li>Flexible option of Mass upload, import of organizational rules in to ACM via excel.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Central Rule Book</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="book">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_crb.png" alt="book icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Master data for ACM are risk defenitions and are input for running risk analysis.</p>
										<ul>
											<li>Define SoD Conflict risks, Critical access risks in rulebook</li>
											<li>Direct upload of risks , rules in to application</li>
											<li>Best practice Rulebook has been incorporated.</li>
											<li>Audit trial for Master data changes</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Ruleset Converters</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="exchange">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_rc.png" alt="exchange icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Use the inbuilt conversion programs to translate third party rule sets in to ACM format.</p>
										<ul>
											<li>Upload the other rule sets and convert them easily in to MARC format</li>
											<li>Let us help you to convert the third party rule sets in to the ACM format , that minimizes time to implement ACM.</li>
											<li>Avoid manual creation of rule sets which can lead to errors, false positives, negatives.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Offline analysis</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="notebook">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_oa.png" alt="notebook icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Enables to perform the risk analysis by uploading the SAP authorization data.</p>
										<ul>
											<li>If the there is SAP integration to MARC not possible due to lower versions, in that case client can use the offline analysis option.</li>
											<li>Extract the data by using the MARC : Data Extractorto a Access File and upload to ACM.</li>
											<li>Excellent option for independent consultants, auditors who can use this feature for their consulting jobs in the area of SAP authorization audits</li>
											<li>No need to rely on SAP connections.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Integration with CAM</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="window">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_iwc.png" alt="window icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>ACM is integrated with Compliant Access management.</p>
										<ul>
											<li>Perform risk analysis before provisioning any user changes in to SAP system.</li>
											<li>Helps to avoid any introduction of NEW SoD risks in to SAP system.</li>
											<li>Enable risk analysis execution at workflow approval levels and possibility to make it mandatory to run risk analysis.</li>
											<li>Risk Analysis reports are stored in reports catalogue and can be checked whenever needed.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Mitigation Controls</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="list">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_mc.png" alt="list icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Create mitigation controls when SoD risk can’t be mitigated.</p>
										<ul>
											<li>Business can setup mitigation controls where risk can’t be remediated, avoided.</li>
											<li>Create Mitigation controls per system level and Mitigate users.Users mitigated can be excluded from risk analysis results.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Dashboards</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="chart">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_dash.png" alt="chart icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Management view of dashboards enables quick identification of risk status and helps in decision making.</p>
										<ul>
											<li>View SoD conflict information / Statistics on interactive dashboards.</li>
											<li>Historical information view in dash boards.</li>
											<li>Export results option to PDF, EXCEL files and as a JPG.</li>
											<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_right-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Notification</p>
							</div>
							<div class="col-md-4 col-md-push-8">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="mail">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_noty.png" alt="mail icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8 col-md-pull-4">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
										<ul>
											<li>View SoD conflict information / Statistics on interactive dashboards.</li>
											<li>Historical information view in dash boards.</li>
											<li>Export results option to PDF, EXCEL files and as a JPG.</li>
											<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="prod-cont-item prod-cont-item_type_left-image" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<p class="prod-cont-item__descr-title">Integrations</p>
							</div>
							<div class="col-md-4">
								<div class="prod-cont-item__descr-image-block">
									<div class="prod-cont-item__descr-image svg-icon" data-icon="puzzle">
										<img src="<?php echo get_template_directory_uri(); ?>/img/acm_int.png" alt="puzzle icon" />
									</div>
								</div>
							</div>
							<div class="col-md-8">
								<div class="prod-cont-item__descr">
									<div class="prod-cont-item__descr-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</p>
										<ul>
											<li>View SoD conflict information / Statistics on interactive dashboards.</li>
											<li>Historical information view in dash boards.</li>
											<li>Export results option to PDF, EXCEL files and as a JPG.</li>
											<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<?php //get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
