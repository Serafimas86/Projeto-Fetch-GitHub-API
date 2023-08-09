const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl
      }" alt="Foto Não encontrada ou Não possui ❌">
                                    <div class="data">
                                      <h1>${user.name ?? "Não possui nome cadastrado 😥"}</h1>
                                      <p>${user.bio ?? "Não possui biografia 😪"}</p>

                                      <ul class="followers">
                                      <li><a>👤 Fallowing: ${user.following}</a></li>
                                      <li><a>👥 Fallowers: ${user.followers}</a></li>
                                      </ul>
                                    </div>
                                  </div>`;

    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
      (repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                                <ul class="ulRepositories">
                                  <li>🍴${repo.forks}"Sem forks"</li>
                                  <li>⭐${repo.stargazers_count}"Sem stargazers"</li>
                                  <li>👀${repo.watchers}"Sem watchers"</li>
                                  <li>👨‍💻${repo.language}"Sem language"</li>
                                </ul>
                                </a>
                              </li>`)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                      <div>`;
    }

    let eventsItens = "";
    user.events.forEach((repo) =>
      (eventsItens += `<li><a href="#">${repo.repo.name} - <strong>${repo.type}</strong></a></li>`)
    );

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events ">
                                  <h2>Ultimos Eventos</h2>
                                          <div class="ulEvents">
                                            <ul>${eventsItens}</ul>
                                          <div>
                                  </div>`;
    }

  },



  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuario Não encontrado</h3>";
  },
};

export { screen };
