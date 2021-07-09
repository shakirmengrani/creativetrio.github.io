import {
  Container, Grid, Typography, Divider
} from '@material-ui/core'
import data from '../data/Home.json'
import { Header, TagCard, SkillTag, MainMenu, ServicesTab } from '../components/home'

function Home() {
  const { title, skills, services } = data
  return (
    <div>
      {/* <MainMenu title={title} /> */}
      <Grid container>
        <Grid item xs={12} style={{ display: "flex", justifyContent: 'center' }}>
          <Header />
        </Grid>
      </Grid>
      <Container style={{position: "absolute", top: '85vh'}}>
        <Grid container>
          <Grid item xs={4}>
            <TagCard title="Innovative results" content="We are technology driven and find the best solution for clients." />
          </Grid>
          <Grid item xs={4}>
            <TagCard title="Impressive cost" content="Our costing is super impressive to make uplifting quality work." />
          </Grid>
          <Grid item xs={4}>
            <TagCard title="On scheduled" content="We meet delivery as per scheduled time with responsive customer services." />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h3">
              About Us
            </Typography>
            We are group of multi talented peoples, we have a grip to transform your business on your smart device such as smart phones, laptops or your PC, Where ever you needs. We can help to automate your industrial machines, expend your business, digitize your business.
            <Divider />
            <Typography variant="h3">
              Our expertise
            </Typography>
            We are proficient to optimal your business processes while using technologies by developing Mobile App, Websites, CMS, Iot, machine learning, by managing cloud infrastructures and a lot of techniques.
          </Grid>
          <Grid item xs={6}>
            <img src="http://placehold.it/320?text=QWERTY" style={{ width: '100%', height: '50vh' }} />
          </Grid>
        </Grid>
        <ServicesTab tabs={[services[0], services[2]]} />
        <Grid container>
          {skills.map((skill, key) => (
            <Grid item key={key}>
              <SkillTag image={`http://placehold.it/100?text=${skill}`} title={skill} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}


export default Home;