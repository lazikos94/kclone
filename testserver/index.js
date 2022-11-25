const app = require("express")()

app.use(require("cors")())
app.use(require("express").json());

app.post("/api/v1/server.do/build-app", async (req, res) => {
  res.status(200).json({
    user: { email: "mike@perfe.com", username: "mikekarypidis" },
    applications: [
      { 
        name: "Admin", icon: "A", path: "admin", 
        pages: [
          { name: "new_user", label: "New User", path: "user/new"  },
          { name: "user_list", label: "User List", path: "user/list"  }
        ],
        navigations: [
          { name: "new_user", label: "New User", path: "/admin/user/new"  },
          { name: "user_list", label: "User List", path: "/admin/user/list"  }
        ] 
      },
      { 
        name: "itsm", icon: "IT", path: "itsm", 
        pages: [
          { name: "new_incident", label: "New Incident", path: "incident/new"  },
          { name: "incident_list", label: "Incident List", path: "incident/list"  }
        ],
        navigations: [
          { name: "new_incident", label: "New Incident", path: "/admin/incident/new"  },
          { name: "incident_list", label: "Incident List", path: "/admin/incident/list"  }
        ] 
      }
    ]
  });
})

app.post("/api/v1/server.do/build-page", async (req, res) => {
  res.status(200).json({
    page: {
      name: req.body.pagename,
      widgets: [
        {

        }
      ]
    }
  });
})


;(async () => {
  const axios = require("axios");

  console.time("startt");

  for (let j = 10; j < 250000; j++) {
    await axios.post("http://localhost:8000/users/new", { 
      username: "ASatrffdsdddd222" + j, email: "aaasdffdds33d" + j + "@magil.com" 
    })
    
  }

  console.timeEnd("startt")
})()

app.listen(5000);
console.log("ok");