package handlers

import (
	"net/http"

	"github.com/chikwandagames/bookings/pkg/config"
	"github.com/chikwandagames/bookings/pkg/models"
	"github.com/chikwandagames/bookings/pkg/render"
)

// Repo is the repository used by handlers
// Here we use a repository pattern, to help us swap components
// in and out off the application with minimal changes to the code.
// We want the handlers to have access to config
var Repo *Repository

// Repository is the repository type
type Repository struct {
	App *config.AppConfig
}

// NewRepo creates a new repository
func NewRepo(a *config.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// NewHandlers set the repository for the handler
func NewHandlers(r *Repository) {
	Repo = r
}

// Home page, Handler function
// In order for a function to respond to requests from a web browser
// it has to handle 2 params, ResponseWriter and Request
// Home is ...
func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	// Get user IP and store in session
	remoteIP := r.RemoteAddr
	// Takes a context, key and value of item to store in session
	m.App.Session.Put(r.Context(), "remote_ip", remoteIP)
	render.RenderTemplate(w, "home.page.html", &models.TemplateData{})

}

// About is the handler for the about page
// Adding the receiver, gives About handler access to everything inside
// the repository
func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("about handler called")
	// render.RenderTemplate(w, "about.page.html", &models.TemplateData{})
	stringMap := make(map[string]string)
	stringMap["test"] = "Hello there"

	// Get value stored in session
	// Use GetString(), that way no need for casting
	remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")
	stringMap["remote_ip"] = remoteIP

	render.RenderTemplate(w, "about.page.html", &models.TemplateData{
		StringMap: stringMap,
	})

}

// Reservation renders the make reservation page
func (m *Repository) Reservation(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "make-reservation.page.html", &models.TemplateData{})
}

// Generals renders room page
func (m *Repository) Generals(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "generals.page.html", &models.TemplateData{})
}

// Majors renders the room page
func (m *Repository) Majors(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "majors.page.html", &models.TemplateData{})
}

// Availability renders the search availability page
func (m *Repository) Availability(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "search-availability.page.html", &models.TemplateData{})
}

// Contact renders the contact page
func (m *Repository) Contact(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "contact.page.html", &models.TemplateData{})
}
